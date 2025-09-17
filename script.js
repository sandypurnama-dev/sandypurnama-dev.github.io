// Toggle search box
document.getElementById('searchIcon').addEventListener('click', () => {
  const searchContainer = document.querySelector('.search-container');
  searchContainer.classList.toggle('show');
  document.getElementById('searchBox').focus();
});

// Search filter
function searchService() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const services = document.querySelectorAll('#servicesList .service');
  services.forEach(service => {
    const text = service.textContent.toLowerCase();
    if (text.includes(input)) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  });
}

// Trigger search saat tekan Enter
document.getElementById('searchBox').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchService();
  }
});

// Toggle hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('show');
});
