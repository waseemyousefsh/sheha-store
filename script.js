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

            Valve:
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
                "شركة شيحة — خبرةٌ تمتد منذ عام 2008\n\nمنذ عام 2008، تواصل شركة شيحة مسيرتها في مجال استيراد وتجارة الأدوات الصحية وحلول الطاقة الشمسية، واضعةً الجودة والموثوقية ورضا العملاء في مقدمة أولوياتها.\n\nنسعى إلى تلبية احتياجات السوق من خلال توفير مجموعة واسعة ومتنوعة من الأدوات الصحية والمنتجات ذات الجودة العالية، إلى جانب حلول ومنتجات الطاقة الشمسية، مع الحرص على اختيار منتجات موثوقة تلبي تطلعات عملائنا وتواكب احتياجات السوق المتغيرة.\n\nوبفضل خبرتنا الممتدة لسنوات، وعلاقاتنا المتينة مع الموردين، وحرصنا المستمر على تطوير منتجاتنا وخدماتنا، نعمل على تقديم أفضل قيمة مقابل السعر، من خلال الجمع بين الجودة العالية والأسعار المنافسة، بما يضمن لعملائنا خيارات عملية وموثوقة تلائم مختلف الاحتياجات.\n\nفي شركة شيحة، لا نكتفي بتوفير المنتجات، بل نحرص على بناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة، الجودة، الالتزام، وحسن الخدمة.\n\nشركة شيحة — خبرة تُبنى عليها الثقة، وجودة تلبي احتياجاتك.",

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

            facebook:
                "صفحتنا على Facebook",

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

            Valve:
                "Valve",

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
                "Shiha Company — Expertise You Can Trust Since 2008\n\nSince 2008, Shiha Company has been building its experience and reputation in the import and trade of sanitary ware and solar energy solutions, with quality, reliability, and customer satisfaction at the heart of everything we do.\n\nWe are committed to meeting the needs of the market by providing a wide and diverse range of high-quality sanitary products, in addition to solar energy products and solutions. We carefully select reliable products that meet our customers’ expectations and keep pace with the evolving needs of the market.\n\nWith years of experience, strong relationships with trusted suppliers, and a continuous commitment to developing our products and services, we strive to offer the best value for money by combining high quality with competitive prices. This enables our customers to find practical, reliable solutions that meet a wide range of requirements.\n\nAt Shiha Company, we do more than simply provide products. We are committed to building long-term relationships with our customers based on trust, quality, commitment, and excellent service.\n\nShiha Company — Experience You Can Trust, Quality That Meets Your Needs.",

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

            facebook:
                "Our Facebook Page",

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
            name: "طاقة شمسية لتسخين المياه",
            nameEn: "Solar water heater",
            price: 275,
            category: "'طاقة",
            categoryEn: "Sugar",
            description: "طاقة شمسية لتسخين المياه",
            descriptionEn: "Solar water heater product",
            image: "images/product1.jpg"
        },

        {
            id: 2,
            name: "كونترول طاقة شمسية",
            nameEn: "Tk control",
            price: 25,
            category: "كونترول",
            categoryEn: "control",
            description: "كونترول طاقة شمسية",
            descriptionEn: "Tk control",
            image: "images/product2.jpg"
        },

        {
            id: 3,
            name: "كاسر ضغط",
            nameEn: "Pressure reducer",
            price: 0.75,
            category: "طاقة شمسية",
            categoryEn: "Faucets",
            description: "كاسر ضغط",
            descriptionEn: "Pressure reducer ",
            image: "images/product3.jpg"
        },

        {
            id: 4,
            name: "أنبوب طاقة شمسية",
            nameEn: "Water heater pipe",
            price: 5,
            category: "طاقة شمسية",
            categoryEn: "Mixers",
            description: "أنبوب طاقة شمسية",
            descriptionEn: "Costa bathroom mixer",
            image: "images/product4.jpg"
        },

        {
            id: 5,
            name: "مضخة فلتر مياه",
            nameEn: "Water filter pump",
            price: 22,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "مضخة فلتر مياه",
            descriptionEn: "Water filter pump",
            image: "images/product5.jpg"
        },

{
            id: 6,
            name: "مضخة تسريع مياه كروم",
            nameEn: "Pressure booster pump",
            price: 20,
            category: "مضخات مياه",
            categoryEn: "Pumps",
            description: "مضخة تسريع مياه كروم",
            descriptionEn: "Pressure booster pump",
            image: "images/product6.jpg"
        },

{
            id: 7,
            name: "مضخة مياه",
            nameEn: "Water pump",
            price: 30,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "مضخة مياه",
            descriptionEn: "Water pump",
            image: "images/product7.jpg"
        },

{
            id: 8,
            name: "مضخة تسريع مياه فونط",
            nameEn: "Pressure booster pump",
            price: 25,
            category: "مضخات مياه",
            categoryEn: "Pumps",
            description: "مضخة تسريع مياه فونط",
            descriptionEn: "Pressure booster pump",
            image: "images/product8.jpg"
        },

{
            id: 9,
            name: "هيدروفورم مضخة مياه",
            nameEn: "Pressure pump control",
            price: 22,
            category: "مضخات مياه",
            categoryEn: "Pumps",
            description: "هيدروفورم مضخة مياه ",
            descriptionEn: "Pressure pump control",
            image: "images/product9.jpg"
        },

{
            id: 10,
            name: "فلتر مياه",
            nameEn: "Water 5 stages filter",
            price: 100,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "فلتر مياه",
            descriptionEn: "Water 5 stages filter",
            image: "images/product10.jpg"
        },

{
            id: 11,
            name: "خرطوشة فلتر مياه سللوز",
            nameEn: "Water polypropylane filter",
            price: 2,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "خرطوشة فلتر مياه سللوز",
            descriptionEn: "Water polypropylane filter",
            image: "images/product11.jpg"
        },

{
            id: 12,
            name: "خرطوشة فلتر مياه فحم صلب ",
            nameEn: "Water 10 m nominal filter",
            price: 2,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "خرطوشة فلتر مياه فحم صلب ",
            descriptionEn: "Water 10 m nominal filter",
            image: "images/product12.jpg"
        },

{
            id: 13,
            name: "خرطوشة فلتر مياه كربون",
            nameEn: "Water carbon filter",
            price: 2,
            category: "فلاتر مياه",
            categoryEn: "Pumps",
            description: "خرطوشة فلتر مياه كربون",
            descriptionEn: "Water carbon filter",
            image: "images/product13.jpg"
        },

{
            id: 14,
            name: "خلاط حمام كوستا",
            nameEn: "Costa bath mixer ",
            price: 20,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water Mixer",
            description: "خلاط حمام كوستا",
            descriptionEn: "Costa bath mixer ",
            image: "images/product14.jpg"
        },

{
            id: 16,
            name: "خلاط مغسلة كوستا",
            nameEn: "Costa sink mixer ",
            price: 15,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "خلاط مغسلة كوستا",
            descriptionEn: "Costa sink mixer ",
            image: "images/product16.jpg"
        },

{
            id: 15,
            name: "خلاط مجلى كوستا",
            nameEn: "Costa wall mounted mixer ",
            price: 15,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "خلاط مجلى كوستا",
            descriptionEn: "Costa wall mounted mixer ",
            image: "images/product15.jpg"
        },

{
            id: 17,
            name: "حنفية كروم طويلة ",
            nameEn: "Long water faucet ",
            price: 5,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "حنفية كروم طويلة",
            descriptionEn: "Long Water faucet ",
            image: "images/product17.jpg"
        },

{
            id: 18,
            name: "حنفية مياه شك",
            nameEn: "Water tap doubt  ",
            price: 5,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "حنفية مياه شك",
            descriptionEn: "Water tap doubt ",
            image: "images/product18.jpg"
        },

{
            id: 19,
            name: "سكر زاوية نحاس",
            nameEn: "Angle valve  ",
            price: 2,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "سكر زاوية نحاس",
            descriptionEn: "Angle valve ",
            image: "images/product19.jpg"
        },

{
            id: 20,
            name: "رقبة خلاط طويلة",
            nameEn: "long mixer spout  ",
            price: 1,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "رقبة خلاط طويلة",
            descriptionEn: "Long mixer spout ",
            image: "images/product20.jpg"
        },

{
            id: 21,
            name: "رقبة خلاط عكاز ",
            nameEn: "Mixer tap spout  ",
            price: 1,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "رقبة خلاط عكاز",
            descriptionEn: "Mixer tap spout ",
            image: "images/product21.jpg"
        },

{
            id: 22,
            name: "رقبة خلاط عريضة قصيرة ",
            nameEn: "Short wide tap spout  ",
            price: 2,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "رقبة خلاط عريضة قصيرة",
            descriptionEn: "Short wide tap spout ",
            image: "images/product22.jpg"
        },

{
            id: 23,
            name: "رقبة خلاط عريضة طويلة ",
            nameEn: "Long wide tap spout  ",
            price: 2,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "رقبة خلاط عريضة طويلة",
            descriptionEn: "Long wide tap spout ",
            image: "images/product23.jpg"
        },

{
            id: 24,
            name: "مجموعة دوش حمام مزدوجة ",
            nameEn: "Dual shower set  ",
            price: 15,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "مجموعة دوش حمام مزدوجة",
            descriptionEn: "Dual shower set ",
            image: "images/product24.jpg"
        },


{
            id: 25,
            name: "دوش حمام مفرد ",
            nameEn: "Shower set  ",
            price: 2.500,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "دوش حمام مفرد",
            descriptionEn: "Shwer set ",
            image: "images/product25.jpg"
        },

{
            id: 26,
            name: "قبضة دوش  مفردة ",
            nameEn: "Shower handle  ",
            price: 1.25,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "قبضة دوش  مفردة",
            descriptionEn: "Shwer handle ",
            image: "images/product26.jpg"
        },

{
            id: 27,
            name: "مجموعة شطاف",
             nameEn: "Bidet sprayer set  ",
            price: 2.5,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "مجموعة شطاف",
            descriptionEn: "Bidet sprayer set ",
            image: "images/product27.jpg"
        },

{
            id: 28,
            name: "قبضة شطاف",
            nameEn: "Bidet sprayer  ",
            price: 1.25,
            category: "خلاطات و حنفيات مياه",
            categoryEn: "Water mixer",
            description: "قبضة شطاف",
            descriptionEn: "Bidet sprayer ",
            image: "images/product28.jpg"
        },

{
            id: 29,
            name: "خرطوم تواليت كروم",
            nameEn: "Toilet hose  ",
            price: 1.25,
            category: "خرطوم ",
            categoryEn: "hose",
            description: "خرطوم تواليت كروم",
            descriptionEn: "Toilet hose ",
            image: "images/product29.jpg"
        },

{
            id: 30,
            name: "خرطوم تواليت حرير",
            nameEn: "Plastic Toilet hose  ",
            price: 1,
            category: "خرطوم ",
            categoryEn: "hose",
            description: "خرطوم تواليت حرير",
            descriptionEn: "Plastic Toilet hose ",
            image: "images/product30.jpg"
        },

{
            id: 31,
            name: "خرطوم دوش كروم",
            nameEn: "Shower hose  ",
            price: 2,
            category: "خرطوم ",
            categoryEn: "hose",
            description: "خرطوم دوش كروم",
            descriptionEn: "Shower hose ",
            image: "images/product31.jpg"
        },

{
            id: 32,
            name: "كبسة عدة كرسي حمام ",
            nameEn: "Toilet flush button  ",
            price: 1,
            category: "مستلزمات كرسي حمام ",
            categoryEn: "Toilet chair accessories",
            description: "كبسة عدة كرسي حمام",
            descriptionEn: "Toilet flush button ",
            image: "images/product32.jpg"
        },

{
            id: 33,
            name: " عدة كرسي حمام ",
            nameEn: "Toilet flush   ",
            price: 5,
            category: "مستلزمات كرسي حمام ",
            categoryEn: "Toilet chair accessories",
            description: " عدة كرسي حمام",
            descriptionEn: "Toilet flush  ",
            image: "images/product33.jpg"
        },

{
            id: 34,
            name: "  سدة مغسلة  ",
            nameEn: "sink cover hole   ",
            price: 1,
            category: "مستلزمات مغسلة ",
            categoryEn: "sink accessories",
            description: " سدة مغسلة ",
            descriptionEn: "sink cover hole  ",
            image: "images/product34.jpg"
        },

{
            id: 35,
            name: " وصلة ذكر طرفين 1/2 ",
            nameEn: "Male adapter 1/2   ",
            price: 1,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "وصلة ذكر طرفين 1/2",
            descriptionEn: "Male adapter 1/2  ",
            image: "images/product35.jpg"
        },

{
            id: 36,
            name: " وصلة ذكر طرفين 3/8 ",
            nameEn: "Male adapter 3/8   ",
            price: 1,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "وصلة ذكر طرفين 3/8",
            descriptionEn: "Male adapter 3/8  ",
            image: "images/product36.jpg"
        },

{
            id: 37,
            name: " اكرة بسن 3/4*1/2",
            nameEn: "Male1/2 female 3/4 adapter    ",
            price: 1,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "اكرة بسن 3/4*1/2",
            descriptionEn: "Male 1/2 female 3/4 adapter  ",
            image: "images/product37.jpg"
        },

{
            id: 38,
            name: " كوع كروم 1/2 ",
            nameEn: "Chrome elbow 1/2   ",
            price: 1,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "كوع كروم 1/2",
            descriptionEn: "Chrome elbow 1/2  ",
            image: "images/product38.jpg"
        },

{
            id: 39,
            name: " كوع ذكر كروم 1/2 ",
            nameEn: "Chrome male elbow 1/2   ",
            price: 1,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "كوع ذكر كروم 1/2",
            descriptionEn: "Chrome male elbow 1/2  ",
            image: "images/product39.jpg"
        },

{
            id: 40,
            name: " تيه كروم 1/2 ",
            nameEn: "Chrome T 1/2   ",
            price: 1.25,
            category: " كروميات ",
            categoryEn: "Chrome accessories",
            description: "تيه كروم 1/2",
            descriptionEn: "Chrome T 1/2  ",
            image: "images/product40.jpg"
        },

{
            id: 41,
            name: " براغي تثبيت سخان مياه",
            nameEn: "Water heater screws   ",
            price: 1,
            category: " براغي ",
            categoryEn: "Mounting screws",
            description: "براغي تثبيت سخان مياه",
            descriptionEn: "Water heater screws  ",
            image: "images/product41.jpg"
        },

{
            id: 42,
            name: " براغي تثبيت كرسي حمام ",
            nameEn: "Toilet seat screws   ",
            price: 1,
            category: " براغي ",
            categoryEn: "Mounting screws",
            description: "براغي تثبيت كرسي حمام",
            descriptionEn: "toilet seat screws  ",
            image: "images/product42.jpg"
        },

{
            id: 43,
            name: " براغي تثبيت مغسلة ",
            nameEn: "Sink screws   ",
            price: 1,
            category: " براغي ",
            categoryEn: "Mounting screws",
            description: "براغي تثبيت مغسلة",
            descriptionEn: "Sink screws  ",
            image: "images/product43.jpg"
        },


    ];


    for (let i = 50; i <= 50; i++) {

        products.push({

            id: i,

            name: "كرسي مرحاض",


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

    const aboutSection =
        document.getElementById("about");

    const aboutLink =
        document.querySelector('a[href="#about"]');

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



    // === MOBILE MENU - Responsive Improvement ===
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navOverlay = document.getElementById("navOverlay");

    function openNav(){
        if(!mainNav) return;
        mainNav.classList.add("open");
        if(navOverlay) navOverlay.classList.add("open");
        if(menuToggle){ menuToggle.classList.add("active"); menuToggle.setAttribute("aria-expanded","true"); }
        document.body.classList.add("nav-open");
    }
    function closeNav(){
        if(!mainNav) return;
        mainNav.classList.remove("open");
        if(navOverlay) navOverlay.classList.remove("open");
        if(menuToggle){ menuToggle.classList.remove("active"); menuToggle.setAttribute("aria-expanded","false"); }
        document.body.classList.remove("nav-open");
    }

    if(menuToggle){
        menuToggle.addEventListener("click", function(e){
            e.stopPropagation();
            if(mainNav.classList.contains("open")) closeNav(); else openNav();
        });
    }
    if(navOverlay){
        navOverlay.addEventListener("click", closeNav);
    }
    // Close nav when clicking any link inside
    if(mainNav){
        mainNav.querySelectorAll("a").forEach(a=>{
            a.addEventListener("click", closeNav);
        });
    }
    // Close nav on resize to desktop
    window.addEventListener("resize", function(){
        if(window.innerWidth > 900) closeNav();
    });
    // Close nav on ESC
    document.addEventListener("keydown", function(e){
        if(e.key === "Escape"){ closeNav(); closeCart(); }
    });

    
    year.textContent = new Date().getFullYear().toString();

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();

            const isHidden = aboutSection.classList.contains("about-hidden");

            aboutSection.classList.remove("about-hidden");
            aboutSection.setAttribute("aria-hidden", "false");

            if (isHidden) {
                setTimeout(() => {
                    aboutSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 60);
            }
        });
    }


    applyLanguage();

});