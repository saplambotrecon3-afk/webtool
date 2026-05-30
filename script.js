// Product Data
const allProducts = [
    {
        id: 1,
        name: "Grok AI Automation",
        price: "250.000đ",
        rating: 5.0,
        reviews: 4,
        buyers: "25",
        status: "Giao ngay",
        image: "images/grok.png",
        gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
    },
    {
        id: 2,
        name: "Flow Veo3 Image + Video AI Automation",
        price: "400.000đ",
        rating: 5.0,
        reviews: 2,
        buyers: "21",
        status: "Giao ngay",
        image: "images/flow.png",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 3,
        name: "Flow Veo3 Image Automation AI",
        price: "100.000đ",
        rating: 5.0,
        reviews: 0,
        buyers: "21",
        status: "Giao ngay",
        image: "images/flow_image.png",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 4,
        name: "Flow Veo3 Video AI Automation",
        price: "300.000đ",
        rating: 5.0,
        reviews: 2,
        buyers: "11",
        status: "Giao ngay",
        image: "images/flow_video.png",
        gradient: "linear-gradient(135deg, #ff6b35 0%, #dd1c1a 100%)"
    },
    {
        id: 5,
        name: "Meta Video AI Automation",
        price: "200.000đ",
        rating: 5.0,
        reviews: 2,
        buyers: "345",
        status: "Giao ngay",
        image: "images/meta.png",
        gradient: "linear-gradient(135deg, #e74c3c 0%, #a93226 100%)"
    },
    {
        id: 6,
        name: "Qwen Video AI Automation",
        price: "250.000đ",
        rating: 5.0,
        reviews: 0,
        buyers: "359",
        status: "Giao ngay",
        image: "images/qwen.png",
        gradient: "linear-gradient(135deg, #ffa500 0%, #ff6347 100%)"
    },
    // {
    //     id: 7,
    //     name: "Canva Pro",
    //     price: "24.900đ - 179.000đ",
    //     rating: 5.0,
    //     reviews: 1,
    //     buyers: "7.6k",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=Canva+Pro",
    //     gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    // },
    // {
    //     id: 8,
    //     name: "Sản phẩm Microsoft Office",
    //     price: "129.000đ - 399.000đ",
    //     rating: 5.0,
    //     reviews: 0,
    //     buyers: "313",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=Microsoft+Office",
    //     gradient: "linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)"
    // },
    // {
    //     id: 9,
    //     name: "Adobe Creative Cloud",
    //     price: "199.000đ - 599.000đ",
    //     rating: 5.0,
    //     reviews: 3,
    //     buyers: "2.1k",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=Adobe+Creative+Cloud",
    //     gradient: "linear-gradient(135deg, #ff0000 0%, #dd0000 100%)"
    // },
    // {
    //     id: 10,
    //     name: "Spotify Premium",
    //     price: "49.000đ - 179.000đ",
    //     rating: 5.0,
    //     reviews: 5,
    //     buyers: "5.3k",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=Spotify+Premium",
    //     gradient: "linear-gradient(135deg, #1DB954 0%, #191414 100%)"
    // },
    // {
    //     id: 11,
    //     name: "Grammarly Premium",
    //     price: "99.000đ - 299.000đ",
    //     rating: 5.0,
    //     reviews: 1,
    //     buyers: "1.2k",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=Grammarly+Premium",
    //     gradient: "linear-gradient(135deg, #15aabf 0%, #0c5460 100%)"
    // },
    // {
    //     id: 12,
    //     name: "WinRAR Full Version",
    //     price: "29.000đ - 89.000đ",
    //     rating: 5.0,
    //     reviews: 0,
    //     buyers: "890",
    //     status: "Giao ngay",
    //     image: "https://via.placeholder.com/400x240.png?text=WinRAR+Full+Version",
    //     gradient: "linear-gradient(135deg, #ff6b00 0%, #ee5a24 100%)"
    // }
];

let displayedCount = 8;

// Generate Stars
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    return stars;
}

// Create Product Card HTML
function createProductCard(product) {
    const starsHTML = generateStars(product.rating);
    const imageHTML = product.image ? `<img src="${product.image}" alt="${product.name}">` : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image" style="background: ${product.gradient}">
                ${imageHTML}
                <div class="product-badge">BẢO HÀNH VĨNH VIỄN 1+</div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-footer">
                    <div class="product-rating">
                        <span class="stars">${starsHTML}</span>
                        <span>${product.rating}</span>
                        <span>(${product.reviews})</span>
                        <span>Đã bán ${product.buyers}</span>
                    </div>
                </div>
                <div style="margin-top: 8px;">
                    <span class="product-status">✓ ${product.status}</span>
                </div>
            </div>
        </div>
    `;
}

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productsToShow = allProducts.slice(0, displayedCount);
    
    productsGrid.innerHTML = productsToShow
        .map(product => createProductCard(product))
        .join('');
}

// Load More Products
function loadMoreProducts() {
    displayedCount = Math.min(displayedCount + 8, allProducts.length);
    loadProducts();
    
    // Hide load more button if all products are shown
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (displayedCount >= allProducts.length) {
        loadMoreBtn.textContent = 'Không còn sản phẩm';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.5';
        loadMoreBtn.style.cursor = 'not-allowed';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    // Load More Button
    document.querySelector('.load-more-btn').addEventListener('click', loadMoreProducts);
    
    // Search Bar
    document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            console.log('Search for:', e.target.value);
        }
    });
    
    // Product Cards Click
    document.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productId = productCard.getAttribute('data-product-id') || 1;
            window.location.href = `product-detail.html?id=${productId}`;
        }
    });
    
    // Icon Buttons
    document.querySelectorAll('.icon-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const badge = btn.querySelector('.badge');
            if (badge) {
                const count = parseInt(badge.textContent);
                badge.textContent = count + 1;
            }
        });
    });

    // Contact widget (floating) behavior
    const contactWidget = document.getElementById('contactWidget');
    const contactToggle = document.getElementById('contactToggle');
    if (contactToggle && contactWidget) {
        contactToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            contactWidget.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!contactWidget.contains(e.target)) {
                contactWidget.classList.remove('open');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') contactWidget.classList.remove('open');
        });
    }
});
