document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       إعدادات المتجر
    ========================= */

    const WHATSAPP_NUMBER = "963933955690";

    const STORAGE_KEY = "sheha_cart";


    /* =========================
       عناصر الصفحة
    ========================= */

    const searchInput =
        document.getElementById("searchInput");

    const products =
        Array.from(
            document.querySelectorAll(".product-card")
        );

    const categoryButtons =
        document.querySelectorAll(".category");

    const noResults =
        document.getElementById("noResults");

    const cartCount =
        document.getElementById("cartCount");

    const openCartButton =
        document.getElementById("openCartButton");

    const closeCartButton =
        document.getElementById("closeCartButton");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartTotal =
        document.getElementById("cartTotal");

    const whatsappCartButton =
        document.getElementById("whatsappCartButton");

    const clearCartButton =
        document.getElementById("clearCartButton");

    const year =
        document.getElementById("year");


    /* =========================
       السنة
    ========================= */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       السلة
    ========================= */

    let cart = [];

    try {

        const savedCart =
            localStorage.getItem(STORAGE_KEY);

        cart =
            savedCart
                ? JSON.parse(savedCart)
                : [];

        if (!Array.isArray(cart)) {
            cart = [];
        }

    } catch (error) {

        cart = [];

    }


    /* =========================
       حفظ السلة
    ========================= */

    function saveCart() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(cart)
            );

        } catch (error) {

            console.log(
                "تعذر حفظ السلة"
            );

        }

    }


    /* =========================
       تحديث عدد المنتجات
    ========================= */

    function updateCartCount() {

        const count =
            cart.reduce(
                function (total, item) {

                    return total + item.quantity;

                },
                0
            );

        if (cartCount) {

            cartCount.textContent = count;

        }

    }


    /* =========================
       حساب الإجمالي
    ========================= */

    function calculateTotal() {

        return cart.reduce(
            function (total, item) {

                return total +
                    (item.price * item.quantity);

            },
            0
        );

    }


    /* =========================
       عرض السلة
    ========================= */

    function renderCart() {

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            if (emptyCart) {
                emptyCart.style.display = "block";
            }

        } else {

            if (emptyCart) {
                emptyCart.style.display = "none";
            }


            cart.forEach(
                function (item, index) {

                    const itemElement =
                        document.createElement("div");

                    itemElement.className =
                        "cart-item";

                    itemElement.innerHTML = `

                        <div>

                            <h3>
                                ${escapeHtml(item.name)}
                            </h3>

                            <div class="cart-item-price">
                                $${item.price.toFixed(2)}
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
                                حذف المنتج
                            </button>

                        </div>

                        <strong>
                            $${(
                                item.price *
                                item.quantity
                            ).toFixed(2)}
                        </strong>

                    `;

                    cartItems.appendChild(
                        itemElement
                    );

                }
            );

        }


        if (cartTotal) {

            cartTotal.textContent =
                calculateTotal().toFixed(2);

        }

        updateCartCount();

        saveCart();

    }


    /* =========================
       حماية النص
    ========================= */

    function escapeHtml(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =========================
       إضافة منتج للسلة
    ========================= */

    function addToCart(name, price) {

        const existing =
            cart.find(
                function (item) {

                    return item.name === name;

                }
            );

        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({

                name: name,

                price: Number(price),

                quantity: 1

            });

        }

        renderCart();

        openCart();

    }


    /* =========================
       أزرار إضافة للسلة
    ========================= */

    document
        .querySelectorAll(".add-to-cart")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const name =
                            button.dataset.name;

                        const price =
                            Number(
                                button.dataset.price
                            );

                        addToCart(
                            name,
                            price
                        );

                    }
                );

            }
        );


    /* =========================
       التحكم بالسلة
    ========================= */

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        "button"
                    );

                if (!button) {
                    return;
                }

                const action =
                    button.dataset.action;

                const index =
                    Number(
                        button.dataset.index
                    );

                if (
                    Number.isNaN(index) ||
                    !cart[index]
                ) {
                    return;
                }


                if (action === "increase") {

                    cart[index].quantity += 1;

                }


                if (action === "decrease") {

                    cart[index].quantity -= 1;

                    if (
                        cart[index].quantity <= 0
                    ) {

                        cart.splice(
                            index,
                            1
                        );

                    }

                }


                if (action === "remove") {

                    cart.splice(
                        index,
                        1
                    );

                }


                renderCart();

            }
        );

    }


    /* =========================
       فتح السلة
    ========================= */

    function openCart() {

        if (!cartOverlay) {
            return;
        }

        cartOverlay.classList.add("open");

        document.body.classList.add(
            "cart-open"
        );

        renderCart();

    }


    /* =========================
       إغلاق السلة
    ========================= */

    function closeCart() {

        if (!cartOverlay) {
            return;
        }

        cartOverlay.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "cart-open"
        );

    }


    if (openCartButton) {

        openCartButton.addEventListener(
            "click",
            openCart
        );

    }


    if (closeCartButton) {

        closeCartButton.addEventListener(
            "click",
            closeCart
        );

    }


    /* إغلاق عند الضغط خارج السلة */

    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    cartOverlay
                ) {

                    closeCart();

                }

            }
        );

    }


    /* =========================
       زر Escape
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeCart();

            }

        }
    );


    /* =========================
       تفريغ السلة
    ========================= */

    if (clearCartButton) {

        clearCartButton.addEventListener(
            "click",
            function () {

                if (cart.length === 0) {
                    return;
                }

                const confirmed =
                    confirm(
                        "هل تريد تفريغ سلة المشتريات؟"
                    );

                if (confirmed) {

                    cart = [];

                    renderCart();

                }

            }
        );

    }


    /* =========================
       إرسال السلة إلى واتساب
    ========================= */

    if (whatsappCartButton) {

        whatsappCartButton.addEventListener(
            "click",
            function () {

                if (cart.length === 0) {

                    alert(
                        "السلة فارغة. أضف منتجًا أولًا."
                    );

                    return;

                }


                let message =
                    "مرحباً شركة شيحه، أرغب بطلب المنتجات التالية:%0A%0A";


                cart.forEach(
                    function (item, index) {

                        const subtotal =
                            item.price *
                            item.quantity;

                        message +=
                            (index + 1) +
                            "- " +
                            item.name +
                            " × " +
                            item.quantity +
                            " = $" +
                            subtotal.toFixed(2) +
                            "%0A";

                    }
                );


                message +=
                    "%0Aالإجمالي: $" +
                    calculateTotal().toFixed(2);


                const whatsappUrl =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    message;


                window.open(
                    whatsappUrl,
                    "_blank"
                );

            }
        );

    }


    /* =========================
       البحث والتصنيفات
    ========================= */

    let selectedCategory = "all";


    function filterProducts() {

        const query =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";

        let visibleCount = 0;


        products.forEach(
            function (product) {

                const name =
                    (
                        product.dataset.name ||
                        ""
                    ).toLowerCase();

                const category =
                    product.dataset.category ||
                    "";


                const matchesSearch =
                    !query ||
                    name.includes(query);


                const matchesCategory =
                    selectedCategory === "all" ||
                    category === selectedCategory;


                const shouldShow =
                    matchesSearch &&
                    matchesCategory;


                product.style.display =
                    shouldShow
                        ? ""
                        : "none";


                if (shouldShow) {

                    visibleCount++;

                }

            }
        );


        if (noResults) {

            noResults.hidden =
                visibleCount !== 0;

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProducts
        );

    }


    categoryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    categoryButtons.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    selectedCategory =
                        button.dataset.category;


                    filterProducts();

                }
            );

        }
    );


    /* =========================
       تشغيل أولي
    ========================= */

    renderCart();

    filterProducts();

});