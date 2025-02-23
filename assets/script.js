document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendikten hemen sonra, direkt olarak menüyü gösterelim
    document.querySelector('.welcome-page').style.display = 'none';  // Welcome page'i gizle
    const menuPage = document.querySelector('.menu-page');
    menuPage.style.display = 'block';  // Menü sayfasını görünür yap
    menuPage.style.opacity = 0;  // Opacity başlangıçta 0 yap (animasyon için)

    // Menüye geçiş animasyonunu başlatalım
    setTimeout(() => {
        menuPage.style.transition = 'opacity 0.5s ease-in-out';
        menuPage.style.opacity = 1;  // Opacity'yi 1 yaparak menüyü göster
    }, 100);  // Menüye geçiş için kısa bir gecikme
});

// Menü verileri
const menuData = {
    grills: [
        { name: "Antrikot", price: "200 TL", image: "grill1.jpg" },
        { name: "Kebap", price: "150 TL", image: "grill2.jpg" }
    ],
    appetizers: [
        { name: "Hummus", price: "50 TL", image: "appetizer1.jpg" },
        { name: "Cacık", price: "40 TL", image: "appetizer2.jpg" }
    ],
    soups: [
        { name: "Lentil Soup", price: "30 TL", image: "soup1.jpg" },
        { name: "Tomato Soup", price: "35 TL", image: "soup2.jpg" }
    ],
    desserts: [
        { name: "Baklava", price: "60 TL", image: "dessert1.jpg" },
        { name: "Kunefe", price: "70 TL", image: "dessert2.jpg" }
    ],
    drinks: [
        { name: "Water", price: "5 TL", image: "drink1.jpg" },
        { name: "Coke", price: "20 TL", image: "drink2.jpg" },
        { name: "Ayran", price: "20 TL", image: "drink2.jpg" },
        { name: "Tea", price: "20 TL", image: "drink2.jpg" }
    ]
};

function showCategory(category) {
    const categoryList = document.getElementById('categoryList');
    const categories = document.getElementById('categories');
    const goBackButton = document.getElementById('goToBack');
    const goBackToMainButton = document.getElementById('goBackToMain');
    
    categories.style.display = 'none'; // Kategorileri gizle
    goBackButton.style.display = 'block'; // Geri git butonunu göster
    goBackToMainButton.style.display = 'none'; // "Go Back to Main" butonunu gizle

    categoryList.innerHTML = ''; // Önceki içerikleri temizle

    const items = menuData[category];
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `  <!-- Menü öğelerini dinamik olarak ekleyelim -->
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        categoryList.appendChild(itemElement);
    });
}

// Kategori butonları için click eventleri
document.getElementById('grillsBtn').addEventListener('click', function() {
    showCategory('grills');
});

document.getElementById('appetizersBtn').addEventListener('click', function() {
    showCategory('appetizers');
});

document.getElementById('soupsBtn').addEventListener('click', function() {
    showCategory('soups');
});

document.getElementById('dessertsBtn').addEventListener('click', function() {
    showCategory('desserts');
});

document.getElementById('drinksBtn').addEventListener('click', function() {
    showCategory('drinks');
});

// Geri gitme işlevi
document.getElementById('goToBack').addEventListener('click', function() {
    const categoryList = document.getElementById('categoryList');
    const categories = document.getElementById('categories');
    const goBackButton = document.getElementById('goToBack');
    const goBackToMainButton = document.getElementById('goBackToMain');
    
    categoryList.innerHTML = ''; // Kategori içeriğini temizle
    categories.style.display = 'flex'; // Kategorileri yeniden göster
    goBackButton.style.display = 'none'; // Geri git butonunu gizle
    goBackToMainButton.style.display = 'block'; // "Go Back to Main" butonunu tekrar göster
});

// Go Back to Main işlevi
document.getElementById('goBackToMain').addEventListener('click', function() {
    // Ana menüye geri yönlendir
    window.location.href = 'index.html';  // Ana sayfaya yönlendirme
});
