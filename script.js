const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu ul');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });



  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active classes
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));
  
        // Add active class to current tab and content
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
      });
    });
  });
  


// Hamburger menu toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('.menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// Search functionality (same as before)
const products = [
  { id: 1, name: "Modern Vase", price: "N45,000", image: 'https://db9trfdvooga4.cloudfront.net/4XKU6UW8/product/Standing-floor-lamp1734654035126/1734654041323-569172.jpeg', payment: 'https://pay.squadco.com/TF14QM' },
  { id: 2, name: "Wall Clock", price: "N80,000", image: "https://db9trfdvooga4.cloudfront.net/4XKU6UW8/product/Standing-floor-lamp1734654035126/1734654041323-569172.jpeg", payment:'https://pay.squadco.com/DC9CAV' },
  { id: 3, name: "Throw Pillow", price: "N35,000", image: "https://db9trfdvooga4.cloudfront.net/4XKU6UW8/product/6-pieces-of-throw-pillow1734653667003/1734653671851-398827.jpeg", payment:'https://pay.squadco.com/DC9CAV' },
  { id: 4, name: "Floor Lamp", price: "N120,000", image: "https://db9trfdvooga4.cloudfront.net/4XKU6UW8/product/White-Dialed-Luxury-Wall-Clock1734651943543/1734651948110-913438.jpeg", payment:'https://pay.squadco.com/PNHPVW' },
  { id: 5, name: "Decorative Mirror", price: "N98,000", image: "https://db9trfdvooga4.cloudfront.net/4XKU6UW8/product/White-Ceramic-vase1734650613384/1734650621256-123284.jpeg", payment:'https://pay.squadco.com/TF14QM' }
];

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const productSection = document.getElementById("productSection");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase().trim();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  productSection.innerHTML = ""; // Clear the existing products

  if (results.length > 0) {
    results.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.setAttribute("data-id", product.id);
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <a href="${product.payment}" class="buy-now">Buy Now</a>
      `;
      productSection.appendChild(productCard);
    });
  } else {
    productSection.innerHTML = "<p>No products found!</p>";
  }
});



