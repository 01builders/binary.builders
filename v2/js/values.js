(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const valueItems = document.querySelectorAll(".value-item");
    const valueContents = document.querySelectorAll(".value-content");
    valueItems.forEach((item) => {
      item.addEventListener("click", function() {
        const value = this.getAttribute("data-value");
        valueItems.forEach((item2) => item2.classList.remove("active"));
        valueContents.forEach((content) => content.classList.remove("active"));
        this.classList.add("active");
        document.querySelector(`.value-content[data-value="${value}"]`).classList.add("active");
      });
    });
  });
})();
