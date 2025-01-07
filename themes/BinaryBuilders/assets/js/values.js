document.addEventListener('DOMContentLoaded', function() {
  const valueItems = document.querySelectorAll('.value-item');
  const valueContents = document.querySelectorAll('.value-content');

  valueItems.forEach(item => {
    item.addEventListener('click', function() {
      const value = this.getAttribute('data-value');

      // Remove active class from all items and contents
      valueItems.forEach(item => item.classList.remove('active'));
      valueContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked item and corresponding content
      this.classList.add('active');
      document.querySelector(`.value-content[data-value="${value}"]`).classList.add('active');
    });
  });
}); 