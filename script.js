document.addEventListener("DOMContentLoaded", function () {

    const WHATSAPP_NUMBER = "963933955690";
    const STORAGE_KEY = "sheha_cart";
    const LANGUAGE_KEY = "sheha_language";


    const translations = {

        ar: {

            home: "الرئيسية",
            products: "المنتجات",
            about: "من نحن",
            contact: "تواصل معنا",
            cart: "السلة",

            companyName: "شركة شيحه",

            heroTitle:
                "استيراد و تجارة عموم الأدوات الصحية و الطاقة الشمسية",

            heroText:
                "جودة مناسبة • أسعار واضحة • طلب سريع",

            browseProducts:
                "تصفح المنتجات",

            whatsapp:
                "واتساب",

            feature1Title:
                "منتجات متنوعة",

            feature1Text:
                "خيارات متعددة",

            feature2Title:
                "أسعار واضحة",

            feature2Text:
                "الأسعار بالدولار",

            feature3Title:
                "طلب عبر واتساب",

            feature3Text:
                "تواصل سريع",

            ourProducts:
                "منتجاتنا",

            productsText:
                "اختر المنتج وأضفه إلى سلة المشتريات",

            search:
                "ابحث عن منتج...",

            all:
                "الكل",

            sugar:
                "سكر",

            pumps:
                "مضخات",

            faucets:
                "حنفيات",

            mixers:
                "خلاطات",

            other:
                "أخرى",

            noResults:
                "لم يتم العثور على منتج مطابق.",

            aboutUs:
                "من نحن",

            aboutTitle:
                "شركة شيحه",

            aboutText:
                "شركة شيحه SHEHA CO متخصصة في استيراد وتجارة عموم الأدوات الصحية والطاقة الشمسية. نعمل على توفير منتجات متنوعة وأسعار واضحة مع إمكانية الطلب والتواصل مباشرة عبر واتساب.",

            whyUs:
                "لماذا تختارنا؟",

            why1Title:
                "تنوع المنتجات",

            why1Text:
                "مجموعة متنوعة من المنتجات.",

            why2Title:
                "أسعار واضحة",

            why2Text:
                "معرفة سعر المنتج قبل الطلب.",

            why3Title:
                "طلب سهل",

            why3Text:
                "اطلب مباشرة عبر واتساب.",

            why4Title:
                "تواصل سريع",

            why4Text:
                "تواصل مباشر مع الشركة.",

            contactUs:
                "تواصل معنا",

            contactTitle:
                "هل لديك استفسار؟",

            contactText:
                "أرسل لنا اسم المنتج أو طلبك.",

            contactWhatsapp:
                "تواصل معنا عبر واتساب",

            syria:
                "سوريا",

            rights:
                "جميع الحقوق محفوظة",

            cartTitle:
                "سلة المشتريات",

            emptyCart:
                "السلة فارغة حاليًا.",

            total:
                "الإجمالي",

            sendOrder:
                "إرسال الطلب عبر واتساب",

            clearCart:
                "تفريغ السلة",

            addToCart:
                "أضف للسلة",

            remove:
                "حذف المنتج",

            increase:
                "زيادة",

            decrease:
                "إنقاص",

            orderMessage:
                "مرحباً شركة شيحه\n\nأرغب بطلب المنتجات التالية:\n\n",

            totalMessage:
                "\nالإجمالي: $"

        },


        en: {

            home:
                "Home",

            products:
                "Products",

            about:
                "About Us",

            contact:
                "Contact",

            cart:
                "Cart",

            companyName:
                "Sheha Company",

            heroTitle:
                "Import and General Trading of Sanitary Ware and Solar Energy",

            heroText:
                "Quality products • Clear prices • Fast ordering",

            browseProducts:
                "Browse Products",

            whatsapp:
                "WhatsApp",

            feature1Title:
                "Various Products",

            feature1Text:
                "Multiple options",

            feature2Title:
                "Clear Prices",

            feature2Text:
                "Prices in USD",

            feature3Title:
                "WhatsApp Orders",

            feature3Text:
                "Fast communication",

            ourProducts:
                "Our Products",

            productsText:
                "Choose a product and add it to your shopping cart",

            search:
                "Search for a product...",

            all:
                "All",

            sugar:
                "Sugar",

            pumps:
                "Pumps",

            faucets:
                "Faucets",

            mixers:
                "Mixers",

            other:
                "Other",

            noResults:
                "No matching product was found.",

            aboutUs:
                "About Us",

            aboutTitle:
                "Sheha Company",

            aboutText:
                "SHEHA CO specializes in importing and general trading of sanitary ware and solar energy products. We offer a variety of products, clear prices and direct ordering through WhatsApp.",

            whyUs:
                "Why Choose Us?",

            why1Title:
                "Product Variety",

            why1Text:
                "A variety of products and options.",

            why2Title:
                "Clear Prices",

            why2Text:
                "Know the product price before ordering.",

            why3Title:
                "Easy Ordering",

            why3Text:
                "Order directly through WhatsApp.",

            why4Title:
                "Fast Communication",

            why4Text:
                "Direct communication with the company.",

            contactUs:
                "Contact Us",

            contactTitle:
                "Have a Question?",

            contactText:
                "Send us the product name or your request.",

            contactWhatsapp:
                "Contact Us via WhatsApp",

            syria:
                "Syria",

            rights:
                "All rights reserved",

            cartTitle:
                "Shopping Cart",

            emptyCart:
                "Your cart is currently empty.",

            total:
                "Total",

            sendOrder:
                "Send Order via WhatsApp",

            clearCart:
                "Clear Cart",

            addToCart:
                "Add to Cart",

            remove:
                "Remove",

            increase:
                "Increase",

            decrease:
                "Decrease",

            orderMessage:
                "Hello Sheha Company,\n\nI would like to order the following products:\n\n",

            totalMessage:
                "\nTotal: $"

        }

    };


    const products = [

        {
            id: 1,
            name: "سكر عصفورة",
            nameEn: "Asfoura Sugar",
            price: 1,
            category: "سكر",
            categoryEn: "Sugar",
            description: "منتج سكر عصفورة",
            descriptionEn: "Asfoura sugar product",
            image: "images/product1.jpg"
        },

        {
            id: 2,
            name: "مضخة 1/2 حصان",
            nameEn: "1/2 HP Water Pump",
            price: 28,
            category: "مضخات",
            categoryEn: "Pumps",
            description: "مضخة مياه بقوة 1/2 حصان",
            descriptionEn: "1/2 horsepower water pump",
            image: "images/product2.jpg"
        },

        {
            id: 3,
            name: "حنفية بلاستيك كريستال",
            nameEn: "Crystal Plastic Faucet",
            price: 0.75,
            category: "حنفيات",
            categoryEn: "Faucets",
            description: "حنفية بلاستيك بتصميم كريستال",
            descriptionEn: "Crystal design plastic faucet",
            image: "images/product3.jpg"
        },

        {
            id: 4,
            name: "خلاط حمام كوستا",
            nameEn: "Costa Bathroom Mixer",
            price: 20,
            category: "خلاطات",
            categoryEn: "Mixers",
            description: "خلاط حمام كوستا",
            descriptionEn: "Costa bathroom mixer",
            image: "images/product4.png"
        }

    ];


    for (let i = 5; i <= 50; i++) {

        products.push({

            id: i,

            name: `منتج ${i}`,

            nameEn: `Product ${i}`,

            price: 0,

            category: "أخرى",

            categoryEn: "Other",

            description:
                `منتج رقم ${i} - يمكنك تعديل الاسم والسعر`,

            descriptionEn:
                `Product ${i} - you can edit the name and price`,

            image:
                `images/product${i}.jpg`

        });

    }


    const productsGrid =
        document.getElementById("productsGrid");

    const searchInput =
        document.getElementById("searchInput");

    const noResults =
        document.getElementById("noResults");

    const cartCount =
        document.getElementById("cartCount");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartTotal =
        document.getElementById("cartTotal");

    const year =
        document.getElementById("year");

    const languageButton =
        document.getElementById("languageButton");

    const categoryButtons =
        document.querySelectorAll(".category");


    let currentLanguage =
        localStorage.getItem(LANGUAGE_KEY) || "ar";

    let selectedCategory =
        "all";

    let cart = [];

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        cart =
            saved ? JSON.parse(saved) : [];

        if (!Array.isArray(cart)) {
            cart = [];
        }

    } catch {

        cart = [];

    }


    function saveCart() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cart)
        );

    }


    function escapeHtml(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    function applyLanguage() {

        const t =
            translations[currentLanguage];

        const isEnglish =
            currentLanguage === "en";


        document.documentElement.lang =
            currentLanguage;

        document.documentElement.dir =
            isEnglish ? "ltr" : "rtl";

        document.body.classList.toggle(
            "ltr",
            isEnglish
        );


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (t[key] !== undefined) {

                    element.textContent =
                        t[key];

                }

            });


        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                if (t[key] !== undefined) {

                    element.placeholder =
                        t[key];

                }

            });


        languageButton.textContent =
            isEnglish
                ? "العربية"
                : "English";


        document.title =
            isEnglish
                ? "SHEHA CO | Sheha Company"
                : "SHEHA CO | شركة شيحه";


        renderProducts();

        renderCart();

    }


    function renderProducts() {

        productsGrid.innerHTML = "";


        const isEnglish =
            currentLanguage === "en";


        products.forEach(product => {

            const card =
                document.createElement("article");


            card.className =
                "product-card";


            const name =
                isEnglish
                    ? product.nameEn
                    : product.name;


            const category =
                isEnglish
                    ? product.categoryEn
                    : product.category;


            const description =
                isEnglish
                    ? product.descriptionEn
                    : product.description;


            card.dataset.name =
                name.toLowerCase();

            card.dataset.category =
                product.category;


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${escapeHtml(name)}"
                        loading="lazy">

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${escapeHtml(category)}
                    </span>


                    <h3>
                        ${escapeHtml(name)}
                    </h3>


                    <p>
                        ${escapeHtml(description)}
                    </p>


                    <div class="product-bottom">

                        <strong>
                            $${Number(product.price).toFixed(2)}
                        </strong>


                        <button
                            class="add-to-cart"
                            type="button"
                            data-id="${product.id}">

                            ${translations[currentLanguage].addToCart}

                        </button>

                    </div>

                </div>

            `;


            productsGrid.appendChild(card);

        });


        document
            .querySelectorAll(".add-to-cart")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        addToCart(
                            Number(button.dataset.id)
                        );

                    }
                );

            });


        filterProducts();

    }


    function addToCart(id) {

        const product =
            products.find(
                item => item.id === id
            );


        if (!product) return;


        const existing =
            cart.find(
                item => item.id === id
            );


        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                id: product.id,

                name: product.name,

                nameEn: product.nameEn,

                price: Number(product.price),

                quantity: 1

            });

        }


        saveCart();

        renderCart();

        openCart();

    }


    function getTotal() {

        return cart.reduce(
            (total, item) =>
                total +
                Number(item.price) *
                Number(item.quantity),
            0
        );

    }


    function updateCartCount() {

        const count =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(item.quantity),
                0
            );


        cartCount.textContent =
            count;

    }


    function renderCart() {

        cartItems.innerHTML = "";

        const t =
            translations[currentLanguage];

        const isEnglish =
            currentLanguage === "en";


        if (cart.length === 0) {

            emptyCart.style.display =
                "block";

        } else {

            emptyCart.style.display =
                "none";


            cart.forEach(
                (item, index) => {

                    const element =
                        document.createElement("div");


                    element.className =
                        "cart-item";


                    const itemName =
                        isEnglish
                            ? item.nameEn
                            : item.name;


                    const subtotal =
                        Number(item.price) *
                        Number(item.quantity);


                    element.innerHTML = `

                        <div>

                            <h3>
                                ${escapeHtml(itemName)}
                            </h3>

                            <div class="cart-item-price">
                                $${Number(item.price).toFixed(2)}
                            </div>

                            <div class="quantity-controls">

                                <button
                                    type="button"
                                    data-action="decrease"
                                    data-index="${index}">
                                    −
                                </button>

                                <strong>
                                    ${item.quantity}
                                </strong>

                                <button
                                    type="button"
                                    data-action="increase"
                                    data-index="${index}">
                                    +
                                </button>

                            </div>

                            <button
                                type="button"
                                class="remove-item"
                                data-action="remove"
                                data-index="${index}">

                                ${t.remove}

                            </button>

                        </div>

                        <strong>
                            $${subtotal.toFixed(2)}
                        </strong>

                    `;


                    cartItems.appendChild(element);

                }
            );

        }


        cartTotal.textContent =
            getTotal().toFixed(2);


        updateCartCount();

        saveCart();

    }


    cartItems.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("button");

            if (!button) return;


            const action =
                button.dataset.action;

            const index =
                Number(button.dataset.index);


            if (!cart[index]) return;


            if (action === "increase") {

                cart[index].quantity++;

            }


            if (action === "decrease") {

                cart[index].quantity--;

                if (cart[index].quantity <= 0) {

                    cart.splice(index, 1);

                }

            }


            if (action === "remove") {

                cart.splice(index, 1);

            }


            renderCart();

        }
    );


    function openCart() {

        cartOverlay.classList.add("open");

        document.body.classList.add("cart-open");

    }


    function closeCart() {

        cartOverlay.classList.remove("open");

        document.body.classList.remove("cart-open");

    }


    document
        .getElementById("openCartButton")
        .addEventListener(
            "click",
            openCart
        );


    document
        .getElementById("closeCartButton")
        .addEventListener(
            "click",
            closeCart
        );


    cartOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === cartOverlay) {

                closeCart();

            }

        }
    );


    document
        .getElementById("clearCartButton")
        .addEventListener(
            "click",
            function () {

                if (cart.length === 0) return;


                const question =
                    currentLanguage === "en"
                        ? "Do you want to clear the cart?"
                        : "هل تريد تفريغ السلة؟";


                if (confirm(question)) {

                    cart = [];

                    renderCart();

                }

            }
        );


    document
        .getElementById("whatsappCartButton")
        .addEventListener(
            "click",
            function () {

                if (cart.length === 0) {

                    alert(
                        currentLanguage === "en"
                            ? "Your cart is empty. Add a product first."
                            : "السلة فارغة. أضف منتجًا أولاً."
                    );

                    return;

                }


                const t =
                    translations[currentLanguage];


                let message =
                    t.orderMessage;


                cart.forEach(
                    (item, index) => {

                        const itemName =
                            currentLanguage === "en"
                                ? item.nameEn
                                : item.name;


                        const subtotal =
                            Number(item.price) *
                            Number(item.quantity);


                        message +=
                            `${index + 1}- ` +
                            `${itemName} × ` +
                            `${item.quantity}` +
                            ` = $${subtotal.toFixed(2)}\n`;

                    }
                );


                message +=
                    t.totalMessage +
                    getTotal().toFixed(2);


                const url =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    encodeURIComponent(message);


                window.open(
                    url,
                    "_blank"
                );

            }
        );


    searchInput.addEventListener(
        "input",
        filterProducts
    );


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(
                    item =>
                        item.classList.remove("active")
                );


                button.classList.add("active");


                selectedCategory =
                    button.dataset.category;


                filterProducts();

            }
        );

    });


    function filterProducts() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        const cards =
            document.querySelectorAll(
                ".product-card"
            );


        let visible = 0;


        cards.forEach(card => {

            const name =
                card.dataset.name;

            const category =
                card.dataset.category;


            const searchMatch =
                !query ||
                name.includes(query);


            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            const show =
                searchMatch &&
                categoryMatch;


            card.style.display =
                show ? "" : "none";


            if (show) {
                visible++;
            }

        });


        noResults.hidden =
            visible !== 0;

    }


    languageButton.addEventListener(
        "click",
        function () {

            currentLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";


            localStorage.setItem(
                LANGUAGE_KEY,
                currentLanguage
            );


            applyLanguage();

        }
    );


    year.textContent =
        new Date().getFullYear();


    applyLanguage();

});