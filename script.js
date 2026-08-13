function shopNow() {
    window.location.href = "shop.html";
}

function exploreCategories() {
    window.location.href = "shop.html";
}

// ================= SEARCH =================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const productCards = document.querySelectorAll(".product-card");

function searchProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    productCards.forEach(card => {

        const productName =
            card.querySelector(".product-title").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

}

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});

const sellerInfo = {
    "Adinkra Threads": {
        shop: "Adinkra Threads sells premium Ghanaian textiles and bags made for everyday use.",
        info: {
            "Location": "Accra, Ghana",
            "Response time": "Usually within 1 hour",
            "Delivery": "Free over GH₵200",
            "Rating": "4.9/5"
        }
    },
    "Green Valley": {
        shop: "Green Valley brings handcrafted natural beauty products sourced from trusted Ghanaian makers.",
        info: {
            "Location": "Kumasi, Ghana",
            "Response time": "Usually within 2 hours",
            "Delivery": "Free over GH₵150",
            "Rating": "4.8/5"
        }
    },
    "Kente Culture": {
        shop: "Kente Culture celebrates Ghanaian identity through handcrafted accessories and fashion pieces.",
        info: {
            "Location": "Takoradi, Ghana",
            "Response time": "Usually within 2 hours",
            "Delivery": "Free over GH₵120",
            "Rating": "4.9/5"
        }
    },
    "House of Craft": {
        shop: "House of Craft creates custom furniture and home pieces inspired by African design.",
        info: {
            "Location": "Cape Coast, Ghana",
            "Response time": "Usually within 3 hours",
            "Delivery": "Free over GH₵250",
            "Rating": "4.8/5"
        }
    },
    "Cocoa Fields": {
        shop: "Cocoa Fields supplies rich Ghanaian cocoa and food essentials for home cooking and wellness.",
        info: {
            "Location": "Sunyani, Ghana",
            "Response time": "Usually within 2 hours",
            "Delivery": "Free over GH₵100",
            "Rating": "4.7/5"
        }
    },
    "Sundown Naturals": {
        shop: "Sundown Naturals creates skin-loving natural products for everyday care and wellness.",
        info: {
            "Location": "Ho, Ghana",
            "Response time": "Usually within 1 hour",
            "Delivery": "Free over GH₵150",
            "Rating": "4.9/5"
        }
    },
    "Lagos Leather": {
        shop: "Lagos Leather crafts durable premium accessories and office essentials with African influence.",
        info: {
            "Location": "Accra, Ghana",
            "Response time": "Usually within 2 hours",
            "Delivery": "Free over GH₵150",
            "Rating": "4.8/5"
        }
    },
    "Jewel & Co.": {
        shop: "Jewel & Co. crafts colorful statements and accessories inspired by Ghanaian culture and modern style.",
        info: {
            "Location": "Tamale, Ghana",
            "Response time": "Usually within 3 hours",
            "Delivery": "Free over GH₵120",
            "Rating": "4.8/5"
        }
    },
    "Art of Ghana": {
        shop: "Art of Ghana creates authentic and vibrant handcrafted decor pieces reflecting Ghanaian heritage.",
        info: {
            "Location": "Kumasi, Ghana",
            "Response time": "Usually within 3 hours",
            "Delivery": "Free over GH₵200",
            "Rating": "4.7/5"
        }
    },
    "Roast & Rise": {
        shop: "Roast & Rise offers premium local coffee blends with rich Ghanaian flavor and aroma.",
        info: {
            "Location": "Cape Coast, Ghana",
            "Response time": "Usually within 2 hours",
            "Delivery": "Free over GH₵150",
            "Rating": "4.7/5"
        }
    },
    "Nature Glow": {
        shop: "Nature Glow offers calming home fragrance and wellness essentials made with natural ingredients.",
        info: {
            "Location": "Tema, Ghana",
            "Response time": "Usually within 1 hour",
            "Delivery": "Free over GH₵150",
            "Rating": "4.8/5"
        }
    }
};

const shopModal = document.getElementById("shopModal");
const chatModal = document.getElementById("chatModal");
const shopModalTitle = document.getElementById("shopModalTitle");
const shopModalContent = document.getElementById("shopModalContent");
const chatSellerName = document.getElementById("chatSellerName");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatSendBtn = document.getElementById("chatSendBtn");

function openShopModal(sellerName) {
    const data = sellerInfo[sellerName] || {
        shop: "This seller offers quality products and responsive support.",
        info: {
            "Location": "Ghana",
            "Response time": "Usually within a few hours",
            "Delivery": "Nationwide shipping",
            "Rating": "4.8/5"
        }
    };

    shopModalTitle.textContent = sellerName;
    const detailMarkup = [
        `<div class="shop-detail"><strong>About</strong><span>${data.shop}</span></div>`
    ];

    Object.entries(data.info).forEach(([label, value]) => {
        detailMarkup.push(`<div class="shop-detail"><strong>${label}</strong><span>${value}</span></div>`);
    });

    shopModalContent.innerHTML = detailMarkup.join("");
    shopModal.classList.remove("hidden");
    shopModal.setAttribute("aria-hidden", "false");
}

function closeShopModal() {
    shopModal.classList.add("hidden");
    shopModal.setAttribute("aria-hidden", "true");
}

function openChatModal(sellerName) {
    chatSellerName.textContent = sellerName;
    chatBody.innerHTML = `
        <div class="chat-message bot">Hi! I can help with product questions, price, delivery, and custom orders.</div>
    `;
    chatModal.classList.remove("hidden");
    chatModal.setAttribute("aria-hidden", "false");
    chatInput.focus();
}

function closeChatModal() {
    chatModal.classList.add("hidden");
    chatModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".seller-actions .secondary-btn").forEach((button) => {
    button.addEventListener("click", function () {
        const sellerName = this.closest(".seller-box").querySelector(".seller-name").textContent.trim();

        if (this.textContent.includes("View Shop")) {
            openShopModal(sellerName);
        } else {
            openChatModal(sellerName);
        }
    });
});

document.querySelectorAll("[data-close='shop']").forEach((el) => {
    el.addEventListener("click", closeShopModal);
});

document.querySelectorAll("[data-close='chat']").forEach((el) => {
    el.addEventListener("click", closeChatModal);
});

chatSendBtn.addEventListener("click", function () {
    const text = chatInput.value.trim();
    if (!text) return;

    const message = document.createElement("div");
    message.className = "chat-message user";
    message.textContent = text;
    chatBody.appendChild(message);

    const response = document.createElement("div");
    response.className = "chat-message bot";
    response.textContent = `Thanks for your message. I’ll get back to you soon about this product from ${chatSellerName.textContent}.`;
    setTimeout(() => {
        chatBody.appendChild(response);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 300);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
});

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        chatSendBtn.click();
    }
});

window.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("seller-modal-backdrop")) {
        closeShopModal();
        closeChatModal();
    }
});


// ================= WISHLIST =================

let wishlistCount = 0;
let cartCount = 0;

function updateWishlistBadge() {
    const wishlistBadge = document.getElementById("wishlist-count");
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlistCount;
    }
}

function updateCartBadge() {
    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {
    button.addEventListener("click", function () {
        const icon = button.querySelector("i");
        const isLiked = icon.classList.contains("fa-solid");

        if (!isLiked) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#0fcb09";
            wishlistCount++;
            cartCount++;
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "";
            wishlistCount = Math.max(0, wishlistCount - 1);
            cartCount = Math.max(0, cartCount - 1);
        }

        updateWishlistBadge();
        updateCartBadge();
    });
});


// ================= CART =================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", function () {
        cartCount++;
        updateCartBadge();

        const originalText = button.dataset.originalText || "Add to Cart";
        button.dataset.originalText = originalText;
        button.textContent = "Added ✓";
        button.style.background = "#e70b0e";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = "";
        }, 1000);
    });
});


// ================= PRICE SLIDER =================

const priceRange =
    document.getElementById("priceRange");

const priceValue =
    document.getElementById("priceValue");

priceRange.addEventListener("input", function() {

    const value = priceRange.value;

    if (value >= 500) {
        priceValue.textContent = "GH₵ 500+";
    } else {
        priceValue.textContent = "GH₵ " + value;
    }

});


// ================= RESET FILTERS =================

const resetBtn =
    document.getElementById("resetBtn");

resetBtn.addEventListener("click", function() {

    document
        .querySelectorAll('.category-item input[type="checkbox"]')
        .forEach((checkbox, index) => {

            checkbox.checked = index === 0;

        });

    priceRange.value = 500;
    priceValue.textContent = "GH₵ 500+";

    productCards.forEach(card => {
        card.style.display = "flex";
    });

    searchInput.value = "";

});


// ================= APPLY FILTER =================

const applyBtn =
    document.getElementById("applyBtn");

applyBtn.addEventListener("click", function() {

    alert("Filters applied successfully!");

});function filterBranches() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const grid = document.getElementById('branchesGrid');
  const cards = grid.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i].getAttribute('data-name');
    const cardText = cards[i].innerText.toLowerCase();
    
    if (cardData.includes(filter) || cardText.includes(filter)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}