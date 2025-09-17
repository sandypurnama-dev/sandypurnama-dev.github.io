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
    service.style.display = text.includes(input) ? 'block' : 'none';
  });
}

// Trigger search saat tekan Enter
document.getElementById('searchBox').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchService();
  }
});

// ====================
// Hamburger Menu Toggle
// ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
