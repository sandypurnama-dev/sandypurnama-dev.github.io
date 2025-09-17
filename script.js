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
