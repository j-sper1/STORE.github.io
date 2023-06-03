document.addEventListener('DOMContentLoaded', function() {
  const productGrid = document.querySelector('.product-grid');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const productCards = document.querySelectorAll('.product-card');

  const cardWidth = productCards[0].offsetWidth;
  const visibleCards = 3;
  const scrollAmount = cardWidth * visibleCards;

  arrowLeft.addEventListener('click', function() {
    productGrid.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  arrowRight.addEventListener('click', function() {
    productGrid.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  productGrid.addEventListener('scroll', function() {
    arrowLeft.style.display = productGrid.scrollLeft > 0 ? 'block' : 'none';
    arrowRight.style.display =
      productGrid.scrollLeft + productGrid.offsetWidth <
      productGrid.scrollWidth
        ? 'block'
        : 'none';
  });

  const buyButtons = document.querySelectorAll('.buy-now');
  buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var url = 'https://example.com'; // Replace with your desired URL
      window.location.href = url;
    });
  });
});
