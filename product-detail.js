// Product Detail Page Script
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
];

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

// Create Product Card HTML (for related products)
function createProductCard(product) {
    const starsHTML = generateStars(product.rating);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image" ${product.image ? '' : `style="background: ${product.gradient}"`}>
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ''}
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

// Get product ID from URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// Load Product Detail
function loadProductDetail() {
    const productId = getProductIdFromURL();
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) {
        document.body.innerHTML = '<p>Sản phẩm không tìm thấy</p>';
        return;
    }
    
    // Update breadcrumb
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    // Update product image
    const mainImageDiv = document.getElementById('mainImage');
    const productImg = document.getElementById('productImg');

    if (product.image) {
        productImg.src = product.image;
        productImg.style.display = 'block';
        mainImageDiv.style.background = 'none';
    } else {
        productImg.style.display = 'none';
        mainImageDiv.style.background = product.gradient;
    }
    
    // Update product info
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('detailStars').innerHTML = generateStars(product.rating);
    document.getElementById('detailRating').textContent = product.rating;
    document.getElementById('detailReviews').textContent = `(${product.reviews} đánh giá)`;
    document.getElementById('detailBuyers').textContent = `Đã bán ${product.buyers}`;
    
    // Load related products (exclude current product)
    loadRelatedProducts(productId);
}

// Load Related Products
function loadRelatedProducts(excludeId) {
    const relatedProducts = allProducts.filter(p => p.id !== excludeId).slice(0, 4);
    const relatedProductsContainer = document.getElementById('relatedProducts');
    
    relatedProductsContainer.innerHTML = relatedProducts
        .map(product => createProductCard(product))
        .join('');
    
    // Add click event to related products
    document.querySelectorAll('#relatedProducts .product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-product-id');
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetail();
    
    // Payment Modal
    const paymentModal = document.getElementById('paymentModal');
    const purchaseBtn1 = document.getElementById('purchaseBtn1');
    const purchaseBtn2 = document.getElementById('purchaseBtn2');
    const closeModal = document.getElementById('closeModal');
    
    // Open modal when purchase buttons clicked
    purchaseBtn1.addEventListener('click', () => {
        paymentModal.classList.add('active');
    });
    
    purchaseBtn2.addEventListener('click', () => {
        const rect = purchaseBtn2.getBoundingClientRect();
        const toast = Toastify({
            text: "Liên hệ góc dưới bên phải màn hình để được hỗ trợ mua hàng nhanh chóng!",
            duration: 5000,
            gravity: "bottom",
            position: "center",
            offset: {
                y: window.innerHeight - rect.bottom - 70
            }
        }).showToast();
        
        // Đóng toast khi click bất kỳ nơi nào (trừ button)
        setTimeout(() => {
            const closeToastOnAction = (e) => {
                if (e.target !== purchaseBtn2 && !purchaseBtn2.contains(e.target)) {
                    const toastElement = document.querySelector('.toastify.on');
                    if (toastElement) {
                        toastElement.remove();
                    }
                    document.removeEventListener('click', closeToastOnAction);
                }
            };
            document.addEventListener('click', closeToastOnAction);
        }, 100);
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        paymentModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.classList.remove('active');
        }
    });
    
    // Back button (logo click)
    document.querySelector('.logo').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    // Icon Buttons
    document.querySelectorAll('.header-icons .icon-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const badge = btn.querySelector('.badge');
            if (badge) {
                const count = parseInt(badge.textContent);
                badge.textContent = count + 1;
            }
        });
    });

    // Contact widget behavior (floating)
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
