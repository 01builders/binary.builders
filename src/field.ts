const N = 1600;
const TAIL = 22;

interface Speck {
  x: number;
  y: number;
  life: number;
  rate: number;
  phase: number;
  pulse: number;
  ink: boolean;
  trail: number[];
}

export function mountField(host: HTMLElement): void {
  const canvas = document.createElement("canvas");
  canvas.className = "field";
  canvas.setAttribute("aria-hidden", "true");
  host.prepend(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const specks = seed();
  const mouse = { x: 0.5, y: 0.5, on: false };
  let w = 0;
  let h = 0;
  let dpr = 1;
  let t = 0;

  const resize = (): void => {
    const rect = host.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.floor(rect.width));
    h = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const tick = (): void => {
    t += 0.0016;
    const pal = palette();
    ctx.fillStyle = pal.sky;
    ctx.fillRect(0, 0, w, h);
    step(specks, w, h, t, mouse, reduced);
    paint(ctx, specks, w, h, t, pal);
    if (!reduced) requestAnimationFrame(tick);
  };

  host.addEventListener("pointermove", (event) => {
    const rect = host.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) / rect.width;
    mouse.y = (event.clientY - rect.top) / rect.height;
    mouse.on = true;
  });
  host.addEventListener("pointerleave", () => {
    mouse.on = false;
  });

  new ResizeObserver(resize).observe(host);
  resize();
  tick();
}

function palette(): {
  sky: string;
  fade: string;
  line: string;
  cobalt: string;
} {
  const s = getComputedStyle(document.documentElement);
  return {
    sky: s.getPropertyValue("--sky").trim() || "#d5dde6",
    fade: s.getPropertyValue("--field-fade").trim() || "213, 221, 230",
    line: s.getPropertyValue("--field-line").trim() || "20, 23, 28",
    cobalt: s.getPropertyValue("--field-cobalt").trim() || "33, 71, 255",
  };
}

function seed(): Speck[] {
  const specks: Speck[] = [];
  for (let i = 0; i < N; i += 1) {
    const x = Math.random();
    const y = Math.random();
    specks.push({
      x,
      y,
      life: Math.random(),
      rate: 0.0008 + Math.random() * 0.0018,
      phase: Math.random() * Math.PI * 2,
      pulse: 0.25 + Math.random() * 0.9,
      ink: i % 4 === 0,
      trail: [],
    });
  }
  return specks;
}

function step(
  specks: Speck[],
  w: number,
  h: number,
  t: number,
  mouse: { x: number; y: number; on: boolean },
  frozen: boolean,
): void {
  if (frozen) return;
  const aspect = w / Math.max(h, 1);
  for (const s of specks) {
    const f = curl(s.x * aspect * 2.4, s.y * 2.4, t);
    let vx = f.x * 0.001;
    let vy = f.y * 0.001;
    if (mouse.on) {
      const dx = s.x - mouse.x;
      const dy = s.y - mouse.y;
      const d2 = dx * dx + dy * dy + 0.002;
      vx += (dx / d2) * 0.00005;
      vy += (dy / d2) * 0.00005;
    }
    s.x += vx;
    s.y += vy;
    s.life += s.rate;
    if (s.x < 0 || s.x > 1 || s.y < 0 || s.y > 1 || s.life > 1) {
      s.x = Math.random();
      s.y = Math.random();
      s.life = 0;
      s.trail.length = 0;
      continue;
    }
    s.trail.push(s.x, s.y);
    if (s.trail.length > TAIL * 2) s.trail.splice(0, 2);
  }
}

function paint(
  ctx: CanvasRenderingContext2D,
  specks: Speck[],
  w: number,
  h: number,
  t: number,
  pal: { line: string; cobalt: string },
): void {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const s of specks) {
    const pts = s.trail;
    const n = pts.length / 2;
    if (n < 2) continue;
    const fade = envelope(s, t);
    if (fade < 0.04) continue;
    const rgb = s.ink ? pal.cobalt : pal.line;
    const peak = s.ink ? 0.7 : 0.52;
    ctx.lineWidth = s.ink ? 1.8 : 1.15;
    for (let i = 1; i < n; i += 1) {
      const x0 = pts[(i - 1) * 2] ?? 0;
      const y0 = pts[(i - 1) * 2 + 1] ?? 0;
      const x1 = pts[i * 2] ?? 0;
      const y1 = pts[i * 2 + 1] ?? 0;
      if (Math.abs(x1 - x0) > 0.08 || Math.abs(y1 - y0) > 0.08) continue;
      const a = (i / (n - 1)) * fade * peak;
      ctx.strokeStyle = `rgba(${rgb}, ${a})`;
      ctx.beginPath();
      ctx.moveTo(x0 * w, y0 * h);
      ctx.lineTo(x1 * w, y1 * h);
      ctx.stroke();
    }
  }
}

function envelope(s: Speck, t: number): number {
  const born = Math.sin(s.life * Math.PI);
  const wave = 0.15 + 0.85 * Math.pow(Math.sin(t * s.pulse + s.phase), 2);
  return born * born * wave;
}

function curl(x: number, y: number, t: number): { x: number; y: number } {
  const e = 0.01;
  const n1 = field(x, y + e, t);
  const n2 = field(x, y - e, t);
  const n3 = field(x + e, y, t);
  const n4 = field(x - e, y, t);
  return { x: (n1 - n2) / (2 * e), y: (n4 - n3) / (2 * e) };
}

function field(x: number, y: number, t: number): number {
  return (
    Math.sin(x * 1.7 + t) * Math.cos(y * 1.3 - t * 0.6) +
    0.55 * Math.sin(x * 3.1 - y * 2.4 + t * 1.4) +
    0.25 * Math.cos((x + y) * 4.2 - t * 0.9)
  );
}
