export const initSearch = () => {
  const searchButton = document.getElementById('search-toggle');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchButton || !searchModal || !searchInput || !searchResults) return;

  // Toggle search modal
  searchButton.addEventListener('click', () => {
    const isExpanded = searchButton.getAttribute('aria-expanded') === 'true';
    searchButton.setAttribute('aria-expanded', !isExpanded);
    searchModal.classList.toggle('is-active');
    
    if (!isExpanded) {
      searchInput.focus();
      document.body.classList.add('search-open');
    } else {
      document.body.classList.remove('search-open');
    }
  });

  // Close search when clicking outside
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchButton.setAttribute('aria-expanded', 'false');
      searchModal.classList.remove('is-active');
      document.body.classList.remove('search-open');
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('is-active')) {
      searchButton.setAttribute('aria-expanded', 'false');
      searchModal.classList.remove('is-active');
      document.body.classList.remove('search-open');
    }
  });

  // Handle search input
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.trim();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      performSearch(query);
    }, 300);
  });
};

async function performSearch(query) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '<div class="search-loading">Searching...</div>';

  try {
    const response = await fetch(`/search.json`);
    const data = await response.json();
    
    const results = data.filter(item => {
      const searchContent = `${item.title} ${item.content}`.toLowerCase();
      return searchContent.includes(query.toLowerCase());
    });

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }

    const html = results.map(item => `
      <article class="search-result">
        <h3><a href="${item.permalink}">${item.title}</a></h3>
        <div class="search-result-excerpt">${item.summary}</div>
      </article>
    `).join('');

    searchResults.innerHTML = html;
  } catch (error) {
    console.error('Search error:', error);
    searchResults.innerHTML = '<div class="search-error">An error occurred while searching</div>';
  }
} 