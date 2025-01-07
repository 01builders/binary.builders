(() => {
  // <stdin>
  var GithubIcon = class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
            <div class="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path class="github-body" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path class="github-tail" d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </div>
        `;
      this.bodyPath = this.querySelector(".github-body");
      this.tailPath = this.querySelector(".github-tail");
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.setupAnimations());
      } else {
        this.setupAnimations();
      }
    }
    setupAnimations() {
      const container = this.querySelector("div");
      container.addEventListener("mouseenter", () => {
        console.log("Mouse enter");
        if (!window.motion) {
          console.error("Motion library not loaded");
          return;
        }
        window.motion.animate(this.bodyPath, {
          opacity: [1, 1],
          scale: [1, 1.1],
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        });
        window.motion.animate(this.tailPath, {
          rotate: [-10, 10],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        });
      });
      container.addEventListener("mouseleave", () => {
        console.log("Mouse leave");
        if (!window.motion) return;
        window.motion.animate(this.bodyPath, {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        });
        window.motion.animate(this.tailPath, {
          rotate: 0,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        });
      });
    }
  };
  customElements.define("github-icon", GithubIcon);
})();
