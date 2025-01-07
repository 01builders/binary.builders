(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const valueItems = document.querySelectorAll(".value-item");
    const valueContents = document.querySelectorAll(".value-content");
    valueItems.forEach((item) => {
      item.addEventListener("click", () => {
        const value = item.dataset.value;
        valueItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        valueContents.forEach((content) => {
          if (content.dataset.value === value) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  });
})();
