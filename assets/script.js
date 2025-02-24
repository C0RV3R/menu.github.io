document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.welcome-page').style.display = 'none'; 
    const menuPage = document.querySelector('.menu-page');
    menuPage.style.display = 'block';  
    menuPage.style.opacity = 0;

    // Menüye geçiş animasyonu
    setTimeout(() => {
        menuPage.style.transition = 'opacity 0.5s ease-in-out';
        menuPage.style.opacity = 1;  
    }, 100);  
});

// Menü verileri
const menuData = {
    grills: [
        { 
            name: "Antrikot", 
            price: "200 TL", 
            image: "assets/images/antrikot.png", 
            description: "içindekiler: antrikot, yeşillik, közlenmiş yeşil biber, soğan, közlenmiş patates ve lavaş."
        },
        { 
            name: "Kebap", 
            price: "240 TL", 
            image: "grill2.jpg", 
            description: ""
        }
    ],
    appetizers: [
        { 
            name: "Hummus", 
            price: "50 TL", 
            image: "appetizer1.jpg", 
            description: ""
        },
        { 
            name: "Cacık", 
            price: "40 TL", 
            image: "appetizer2.jpg", 
            description: ""
        }
    ],
    wraps: [
        { 
            name: "Adana Dürüm", 
            price: "60 TL", 
            image: "dessert1.jpg", 
            description: ""
        },
        { 
            name: "Kaburga şiş Dürüm", 
            price: "70 TL", 
            image: "dessert2.jpg", 
            description: ""
        },
        { 
            name: "Çöp şiş Dürüm", 
            price: "70 TL", 
            image: "dessert2.jpg", 
            description: ""
        }
    ],
    soups: [
        { 
            name: "Lentil Soup", 
            price: "30 TL", 
            image: "soup1.jpg", 
            description: ""
        },
        { 
            name: "Tomato Soup", 
            price: "35 TL", 
            image: "soup2.jpg", 
            description: ""
        }
    ],
    desserts: [
        { 
            name: "Baklava", 
            price: "60 TL", 
            image: "dessert1.jpg", 
            description: ""
        },
        { 
            name: "Kunefe", 
            price: "70 TL", 
            image: "dessert2.jpg", 
            description: ""
        }
    ],
    drinks: [
        { 
            name: "Ayran", 
            price: "50 TL", 
            image: "assets/images/ayran.png", 
            description: ""
        },
        { 
            name: "Kola", 
            price: "50 TL", 
            image: "assets/images/kola.png",
            description: "" 
        },
        { 
            name: "Portakallı Gazoz", 
            price: "50 TL", 
            image: "assets/images/portakal.png",
            description: "" 
        },
        { 
            name: "Gazoz", 
            price: "50 TL", 
            image: "assets/images/gazoz.png",
            description: "" 
        },
        { 
            name: "Şalgam", 
            price: "40 TL", 
            image: "assets/images/salgam.png",
            description: "" 
        },
        { 
            name: "Şerbet", 
            price: "40 TL", 
            image: "assets/images/serbet.png",
            description: "" 
        },
        { 
            name: "Soda", 
            price: "40 TL", 
            image: "assets/images/soda.png",
            description: "" 
        }
    ],
    ramadanMenu: [
        { 
            name: "İftar Sofrası", 
            price: "350 TL", 
            image: "ramadan1.jpg", 
            description: "İftar için tam donanımlı, çeşitli yemeklerin sunulduğu bir sofra."
        },
        { 
            name: "Ramazan Pidesi", 
            price: "50 TL", 
            image: "ramadan2.jpg", 
            description: "Geleneksel Türk Ramazan pidesi, yumuşak ve kabarık."
        },
        { 
            name: "Kuzu Tandır", 
            price: "200 TL", 
            image: "ramadan3.jpg", 
            description: "Fırında ağır ağır pişirilmiş kuzu tandır, zengin lezzetli bir ana yemek."
        },
        { 
            name: "Lentil Soup (Mercimek Çorbası)", 
            price: "30 TL", 
            image: "ramadan4.jpg", 
            description: "İftar için ideal, sıcak ve doyurucu mercimek çorbası."
        }
    ]
};

// Modal açma işlevi
function openModal(imageSrc) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Modal kapama işlevi
document.getElementById("closeModal").addEventListener("click", function() {
    const modal = document.getElementById("photoModal");
    modal.style.display = "none";
});

function showCategory(category) {
    const categoryList = document.getElementById('categoryList');
    const categories = document.getElementById('categories');
    const goBackButton = document.getElementById('goToBack');
    const goBackToMainButton = document.getElementById('goBackToMain');
    
    categories.style.display = 'none'; 
    goBackButton.style.display = 'block'; 
    goBackToMainButton.style.display = 'none'; 

    categoryList.innerHTML = ''; 

    const items = menuData[category];
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `  
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <a>${item.description}</a>
        `;
        categoryList.appendChild(itemElement);
        
        // Fotoğraf tıklanabilir olmalı
        itemElement.querySelector('img').addEventListener('click', function() {
            openModal(item.image);
        });
    });
}

// Kategori butonları için eventler
document.getElementById('grillsBtn').addEventListener('click', function() {
    showCategory('grills');
});

document.getElementById('appetizersBtn').addEventListener('click', function() {
    showCategory('appetizers');
});

document.getElementById('soupsBtn').addEventListener('click', function() {
    showCategory('soups');
});

document.getElementById('wrapsBtn').addEventListener('click', function() {
    showCategory('wraps');
});

document.getElementById('dessertsBtn').addEventListener('click', function() {
    showCategory('desserts');
});

document.getElementById('drinksBtn').addEventListener('click', function() {
    showCategory('drinks');
});

document.getElementById('ramadanMenuBtn').addEventListener('click', function() {
    showCategory('ramadanMenu');
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
    window.location.href = 'index.html';
});
