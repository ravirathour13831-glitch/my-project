// ==========================================
// SMART KIRANA
// JAVASCRIPT
// ==========================================


// ==========================================
// PRODUCT DATA
// ==========================================

const defaultProducts = [

    // =========================
    // PULSES
    // =========================

    {
        id: 1,
        nameEn: "Toor Dal",
        nameHi: "अरहर दाल",
        aliases: ["toor dal", "arhar dal", "arhar", "अरहर"],
        category: "pulses",
        unit: "kg",
        price: 140
    },

    {
        id: 2,
        nameEn: "Moong Dal",
        nameHi: "मूंग दाल",
        aliases: ["moong dal", "moong", "मूंग"],
        category: "pulses",
        unit: "kg",
        price: 130
    },

    {
        id: 3,
        nameEn: "Masoor Dal",
        nameHi: "मसूर दाल",
        aliases: ["masoor", "masoor dal", "मसूर"],
        category: "pulses",
        unit: "kg",
        price: 100
    },

    {
        id: 4,
        nameEn: "Chana Dal",
        nameHi: "चना दाल",
        aliases: ["chana dal", "chana", "चना"],
        category: "pulses",
        unit: "kg",
        price: 90
    },

    {
        id: 5,
        nameEn: "Urad Dal",
        nameHi: "उड़द दाल",
        aliases: ["urad", "urad dal", "उड़द"],
        category: "pulses",
        unit: "kg",
        price: 120
    },

    {
        id: 6,
        nameEn: "Rajma",
        nameHi: "राजमा",
        aliases: ["rajma", "राजमा"],
        category: "pulses",
        unit: "kg",
        price: 150
    },

    {
        id: 7,
        nameEn: "Kabuli Chana",
        nameHi: "काबुली चना",
        aliases: ["kabuli chana", "chole", "छोले"],
        category: "pulses",
        unit: "kg",
        price: 130
    },

    {
        id: 8,
        nameEn: "Matar Dal",
        nameHi: "मटर दाल",
        aliases: ["matar dal", "matar", "मटर दाल"],
        category: "pulses",
        unit: "kg",
        price: 90
    },


    // =========================
    // VEGETABLES
    // =========================

    {
        id: 101,
        nameEn: "Potato",
        nameHi: "आलू",
        aliases: ["potato", "aloo", "आलू"],
        category: "vegetables",
        unit: "kg",
        price: 30
    },

    {
        id: 102,
        nameEn: "Tomato",
        nameHi: "टमाटर",
        aliases: ["tomato", "tamatar", "टमाटर"],
        category: "vegetables",
        unit: "kg",
        price: 40
    },

    {
        id: 103,
        nameEn: "Onion",
        nameHi: "प्याज",
        aliases: ["onion", "pyaz", "pyaaz", "प्याज"],
        category: "vegetables",
        unit: "kg",
        price: 35
    },

    {
        id: 104,
        nameEn: "Brinjal",
        nameHi: "बैंगन",
        aliases: ["brinjal", "baingan", "बैंगन"],
        category: "vegetables",
        unit: "kg",
        price: 40
    },

    {
        id: 105,
        nameEn: "Cauliflower",
        nameHi: "फूलगोभी",
        aliases: ["cauliflower", "gobi", "gobhi", "गोभी"],
        category: "vegetables",
        unit: "kg",
        price: 50
    },

    {
        id: 106,
        nameEn: "Cabbage",
        nameHi: "पत्तागोभी",
        aliases: ["cabbage", "patta gobhi", "पत्तागोभी"],
        category: "vegetables",
        unit: "kg",
        price: 40
    },

    {
        id: 107,
        nameEn: "Carrot",
        nameHi: "गाजर",
        aliases: ["carrot", "gajar", "गाजर"],
        category: "vegetables",
        unit: "kg",
        price: 50
    },

    {
        id: 108,
        nameEn: "Radish",
        nameHi: "मूली",
        aliases: ["radish", "mooli", "muli", "मूली"],
        category: "vegetables",
        unit: "kg",
        price: 35
    },

    {
        id: 109,
        nameEn: "Lady Finger",
        nameHi: "भिंडी",
        aliases: ["lady finger", "okra", "bhindi", "भिंडी"],
        category: "vegetables",
        unit: "kg",
        price: 60
    },

    {
        id: 110,
        nameEn: "Bitter Gourd",
        nameHi: "करेला",
        aliases: ["bitter gourd", "karela", "करेला"],
        category: "vegetables",
        unit: "kg",
        price: 60
    },

    {
        id: 111,
        nameEn: "Bottle Gourd",
        nameHi: "लौकी",
        aliases: ["bottle gourd", "lauki", "लौकी"],
        category: "vegetables",
        unit: "kg",
        price: 35
    },

    {
        id: 112,
        nameEn: "Ridge Gourd",
        nameHi: "तुरई",
        aliases: ["ridge gourd", "turai", "tori", "तुरई"],
        category: "vegetables",
        unit: "kg",
        price: 50
    },

    {
        id: 113,
        nameEn: "Pumpkin",
        nameHi: "कद्दू",
        aliases: ["pumpkin", "kaddu", "कद्दू"],
        category: "vegetables",
        unit: "kg",
        price: 35
    },

    {
        id: 114,
        nameEn: "Spinach",
        nameHi: "पालक",
        aliases: ["spinach", "palak", "पालक"],
        category: "vegetables",
        unit: "kg",
        price: 30
    },

    {
        id: 115,
        nameEn: "Peas",
        nameHi: "मटर",
        aliases: ["peas", "matar", "मटर"],
        category: "vegetables",
        unit: "kg",
        price: 80
    },

    {
        id: 116,
        nameEn: "Capsicum",
        nameHi: "शिमला मिर्च",
        aliases: ["capsicum", "shimla mirch", "शिमला मिर्च"],
        category: "vegetables",
        unit: "kg",
        price: 80
    },

    {
        id: 117,
        nameEn: "Green Chilli",
        nameHi: "हरी मिर्च",
        aliases: ["green chilli", "hari mirch", "हरी मिर्च"],
        category: "vegetables",
        unit: "kg",
        price: 70
    },

    {
        id: 118,
        nameEn: "Ginger",
        nameHi: "अदरक",
        aliases: ["ginger", "adrak", "अदरक"],
        category: "vegetables",
        unit: "kg",
        price: 120
    },

    {
        id: 119,
        nameEn: "Garlic",
        nameHi: "लहसुन",
        aliases: ["garlic", "lahsun", "लहसुन"],
        category: "vegetables",
        unit: "kg",
        price: 150
    },

    {
        id: 120,
        nameEn: "Cucumber",
        nameHi: "खीरा",
        aliases: ["cucumber", "kheera", "खीरा"],
        category: "vegetables",
        unit: "kg",
        price: 40
    },


    // =========================
    // FRUITS
    // =========================

    {
        id: 201,
        nameEn: "Apple",
        nameHi: "सेब",
        aliases: ["apple", "seb", "सेब"],
        category: "fruits",
        unit: "kg",
        price: 180
    },

    {
        id: 202,
        nameEn: "Banana",
        nameHi: "केला",
        aliases: ["banana", "kela", "केला"],
        category: "fruits",
        unit: "kg",
        price: 50
    },

    {
        id: 203,
        nameEn: "Mango",
        nameHi: "आम",
        aliases: ["mango", "aam", "आम"],
        category: "fruits",
        unit: "kg",
        price: 100
    },

    {
        id: 204,
        nameEn: "Orange",
        nameHi: "संतरा",
        aliases: ["orange", "santra", "संतरा"],
        category: "fruits",
        unit: "kg",
        price: 80
    },

    {
        id: 205,
        nameEn: "Guava",
        nameHi: "अमरूद",
        aliases: ["guava", "amrud", "amrood", "अमरूद"],
        category: "fruits",
        unit: "kg",
        price: 70
    },

    {
        id: 206,
        nameEn: "Papaya",
        nameHi: "पपीता",
        aliases: ["papaya", "papita", "पपीता"],
        category: "fruits",
        unit: "kg",
        price: 60
    },

    {
        id: 207,
        nameEn: "Watermelon",
        nameHi: "तरबूज",
        aliases: ["watermelon", "tarbooj", "तरबूज"],
        category: "fruits",
        unit: "kg",
        price: 30
    },

    {
        id: 208,
        nameEn: "Grapes",
        nameHi: "अंगूर",
        aliases: ["grapes", "angoor", "अंगूर"],
        category: "fruits",
        unit: "kg",
        price: 100
    },

    {
        id: 209,
        nameEn: "Pomegranate",
        nameHi: "अनार",
        aliases: ["pomegranate", "anar", "अनार"],
        category: "fruits",
        unit: "kg",
        price: 150
    },

    {
        id: 210,
        nameEn: "Pineapple",
        nameHi: "अनानास",
        aliases: ["pineapple", "ananas", "अनानास"],
        category: "fruits",
        unit: "piece",
        price: 80
    },

    {
        id: 211,
        nameEn: "Coconut",
        nameHi: "नारियल",
        aliases: ["coconut", "nariyal", "नारियल"],
        category: "fruits",
        unit: "piece",
        price: 60
    },


    // =========================
    // GROCERY
    // =========================

    {
        id: 301,
        nameEn: "Rice",
        nameHi: "चावल",
        aliases: ["rice", "chawal", "चावल"],
        category: "grocery",
        unit: "kg",
        price: 60
    },

    {
        id: 302,
        nameEn: "Wheat",
        nameHi: "गेहूं",
        aliases: ["wheat", "gehun", "गेहूं"],
        category: "grocery",
        unit: "kg",
        price: 35
    },

    {
        id: 303,
        nameEn: "Sugar",
        nameHi: "चीनी",
        aliases: ["sugar", "chini", "चीनी"],
        category: "grocery",
        unit: "kg",
        price: 50
    },

    {
        id: 304,
        nameEn: "Salt",
        nameHi: "नमक",
        aliases: ["salt", "namak", "नमक"],
        category: "grocery",
        unit: "kg",
        price: 25
    },

    {
        id: 305,
        nameEn: "Mustard Oil",
        nameHi: "सरसों तेल",
        aliases: ["mustard oil", "sarso tel", "sarson tel", "सरसों तेल"],
        category: "grocery",
        unit: "litre",
        price: 150
    },

    {
        id: 306,
        nameEn: "Refined Oil",
        nameHi: "रिफाइंड तेल",
        aliases: ["refined oil", "refined", "रिफाइंड"],
        category: "grocery",
        unit: "litre",
        price: 130
    },

    {
        id: 307,
        nameEn: "Tea",
        nameHi: "चाय",
        aliases: ["tea", "chai", "चाय"],
        category: "grocery",
        unit: "kg",
        price: 400
    },

    {
        id: 308,
        nameEn: "Poha",
        nameHi: "पोहा",
        aliases: ["poha", "chivda", "पोहा", "चिवड़ा"],
        category: "grocery",
        unit: "kg",
        price: 60
    },

    {
        id: 309,
        nameEn: "Maida",
        nameHi: "मैदा",
        aliases: ["maida", "मैदा"],
        category: "grocery",
        unit: "kg",
        price: 45
    },

    {
        id: 310,
        nameEn: "Besan",
        nameHi: "बेसन",
        aliases: ["besan", "gram flour", "बेसन"],
        category: "grocery",
        unit: "kg",
        price: 80
    },


    // =========================
    // SNACKS
    // =========================

    {
        id: 401,
        nameEn: "Namkeen",
        nameHi: "नमकीन",
        aliases: ["namkeen", "नमकीन"],
        category: "snacks",
        unit: "kg",
        price: 180
    },

    {
        id: 402,
        nameEn: "Bhujia",
        nameHi: "भुजिया",
        aliases: ["bhujia", "bhujiya", "भुजिया"],
        category: "snacks",
        unit: "kg",
        price: 200
    },

    {
        id: 403,
        nameEn: "Biscuits",
        nameHi: "बिस्कुट",
        aliases: ["biscuit", "biscuits", "बिस्कुट"],
        category: "snacks",
        unit: "packet",
        price: 10
    },

    {
        id: 404,
        nameEn: "Chips",
        nameHi: "चिप्स",
        aliases: ["chips", "चिप्स"],
        category: "snacks",
        unit: "packet",
        price: 10
    },


    // =========================
    // DAILY USE
    // =========================

    {
        id: 501,
        nameEn: "Soap",
        nameHi: "साबुन",
        aliases: ["soap", "sabun", "साबुन"],
        category: "daily",
        unit: "piece",
        price: 35
    },

    {
        id: 502,
        nameEn: "Shampoo",
        nameHi: "शैम्पू",
        aliases: ["shampoo", "शैम्पू"],
        category: "daily",
        unit: "piece",
        price: 10
    },

    {
        id: 503,
        nameEn: "Toothpaste",
        nameHi: "टूथपेस्ट",
        aliases: ["toothpaste", "tooth paste", "टूथपेस्ट"],
        category: "daily",
        unit: "piece",
        price: 60
    },

    {
        id: 504,
        nameEn: "Detergent",
        nameHi: "डिटर्जेंट",
        aliases: ["detergent", "washing powder", "surf", "डिटर्जेंट"],
        category: "daily",
        unit: "kg",
        price: 100
    },


    // =========================
    // HOME
    // =========================

    {
        id: 601,
        nameEn: "Matchbox",
        nameHi: "माचिस",
        aliases: ["matchbox", "machis", "माचिस"],
        category: "home",
        unit: "piece",
        price: 2
    },

    {
        id: 602,
        nameEn: "Candle",
        nameHi: "मोमबत्ती",
        aliases: ["candle", "mombatti", "मोमबत्ती"],
        category: "home",
        unit: "piece",
        price: 10
    }

];


// ==========================================
// LOAD PRODUCTS FROM LOCAL STORAGE
// ==========================================

const savedProducts =
    localStorage.getItem("smartKiranaProducts");

let products = savedProducts
    ? JSON.parse(savedProducts)
    : defaultProducts;


// ==========================================
// VARIABLES
// ==========================================

let cart = [];

let currentCategory = "all";

let selectedProduct = null;

let calculatedQuantity = 0;

let calculatedTotal = 0;


// ==========================================
// CATEGORY DATA
// ==========================================

const categoriesData = [

    {
        id: "all",
        name: "🏪 All"
    },

    {
        id: "grocery",
        name: "🥫 Grocery"
    },

    {
        id: "pulses",
        name: "🌾 Pulses"
    },

    {
        id: "vegetables",
        name: "🥬 Vegetables"
    },

    {
        id: "fruits",
        name: "🍎 Fruits"
    },

    {
        id: "snacks",
        name: "🍪 Namkeen"
    },

    {
        id: "daily",
        name: "🧴 Daily Use"
    },

    {
        id: "home",
        name: "🏠 Home"
    }

];


// ==========================================
// DOM ELEMENTS
// ==========================================

const categories =
    document.querySelector("#categories");

const productList =
    document.querySelector("#product-list");

const searchInput =
    document.querySelector("#search-input");

const cartList =
    document.querySelector("#cart-list");

const subtotalElement =
    document.querySelector("#subtotal");

const discountInput =
    document.querySelector("#discount");

const discountAmountElement =
    document.querySelector("#discount-amount");

const grandTotalElement =
    document.querySelector("#grand-total");

const clearCartButton =
    document.querySelector("#clear-cart");


// ==========================================
// CALCULATOR ELEMENTS
// ==========================================

const calculatorModal =
    document.querySelector("#calculator-modal");

const calculatorClose =
    document.querySelector("#calculator-close");

const calculatorProductName =
    document.querySelector("#calculator-product-name");

const calculatorProductPrice =
    document.querySelector("#calculator-product-price");

const currentPrice =
    document.querySelector("#current-price");

const weightCalculator =
    document.querySelector("#weight-calculator");

const countCalculator =
    document.querySelector("#count-calculator");

const moneyMode =
    document.querySelector("#money-mode");

const quantityMode =
    document.querySelector("#quantity-mode");

const moneyBox =
    document.querySelector("#money-box");

const quantityBox =
    document.querySelector("#quantity-box");

const moneyInput =
    document.querySelector("#money-input");

const moneyResult =
    document.querySelector("#money-result");

const quantityInput =
    document.querySelector("#quantity-input");

const quantityUnit =
    document.querySelector("#quantity-unit");

const quantityResult =
    document.querySelector("#quantity-result");

const countUnitName =
    document.querySelector("#count-unit-name");

const countValue =
    document.querySelector("#count-value");

const countResult =
    document.querySelector("#count-result");

const minusCount =
    document.querySelector("#minus-count");

const plusCount =
    document.querySelector("#plus-count");

const addToBillButton =
    document.querySelector("#add-to-bill");


// ==========================================
// ADD PRODUCT ELEMENTS
// ==========================================

const addProductButton =
    document.querySelector("#add-product-btn");

const productModal =
    document.querySelector("#product-modal");

const closeModal =
    document.querySelector("#close-modal");

const cancelProduct =
    document.querySelector("#cancel-product");

const saveProductButton =
    document.querySelector("#save-product");


// ==========================================
// SAVE PRODUCTS
// ==========================================

function saveProducts() {

    localStorage.setItem(
        "smartKiranaProducts",
        JSON.stringify(products)
    );

}


// ==========================================
// NORMALIZE SEARCH
// ==========================================

function normalize(text) {

    return String(text)
        .toLowerCase()
        .trim();

}


// ==========================================
// SHOW CATEGORIES
// ==========================================

function showCategories() {

    categories.innerHTML = "";


    categoriesData.forEach(function (category) {

        const button =
            document.createElement("button");


        button.classList.add(
            "category-btn"
        );


        if (
            category.id === currentCategory
        ) {

            button.classList.add(
                "active"
            );

        }


        button.textContent =
            category.name;


        button.addEventListener(
            "click",
            function () {

                currentCategory =
                    category.id;

                showCategories();

                showProducts();

            }
        );


        categories.append(button);

    });

}


// ==========================================
// SEARCH
// ==========================================

function productMatchesSearch(
    product,
    searchText
) {

    const search =
        normalize(searchText);


    if (search === "") {

        return true;

    }


    const names = [

        product.nameEn,

        product.nameHi,

        ...product.aliases

    ];


    return names.some(function (name) {

        return normalize(name)
            .includes(search);

    });

}


// ==========================================
// SHOW PRODUCTS
// ==========================================

function showProducts() {

    productList.innerHTML = "";


    const searchText =
        searchInput.value;


    const filteredProducts =
        products.filter(function (product) {

            const categoryMatch =

                currentCategory === "all"

                ||

                product.category ===
                currentCategory;


            const searchMatch =

                productMatchesSearch(
                    product,
                    searchText
                );


            return (
                categoryMatch &&
                searchMatch
            );

        });


    if (
        filteredProducts.length === 0
    ) {

        productList.innerHTML = `
            <p>❌ Product नहीं मिला।</p>
        `;

        return;

    }


    filteredProducts.forEach(
        function (product) {


            const card =
                document.createElement("div");


            card.classList.add(
                "product-card"
            );


            card.innerHTML = `

                <h3>
                    ${product.nameEn}
                </h3>

                <p class="hindi">
                    ${product.nameHi}
                </p>

                <p class="price">
                    ₹${product.price}
                    /
                    ${product.unit}
                </p>

                <button class="select-btn">
                    Select
                </button>

            `;


            const selectButton =
                card.querySelector(
                    ".select-btn"
                );


            selectButton.addEventListener(
                "click",
                function () {

                    openCalculator(
                        product
                    );

                }
            );


            productList.append(card);

        }
    );

}


// ==========================================
// OPEN CALCULATOR
// ==========================================

function openCalculator(product) {

    selectedProduct = product;


    calculatedQuantity = 0;

    calculatedTotal = 0;


    calculatorProductName.textContent =

        `${product.nameEn} (${product.nameHi})`;


    calculatorProductPrice.textContent =

        `Default Price: ₹${product.price} / ${product.unit}`;


    currentPrice.value =
        product.price;


    moneyInput.value = "";

    quantityInput.value = "";

    moneyResult.textContent = "0";

    quantityResult.textContent = "0";

    countValue.textContent = "1";


    if (
        product.unit === "kg"
    ) {

        weightCalculator
            .classList
            .remove("hidden");


        countCalculator
            .classList
            .add("hidden");


        quantityUnit.innerHTML = `

            <option value="small">
                Gram
            </option>

            <option value="base">
                Kg
            </option>

        `;


        showMoneyMode();

    }


    else if (
        product.unit === "litre"
    ) {

        weightCalculator
            .classList
            .remove("hidden");


        countCalculator
            .classList
            .add("hidden");


        quantityUnit.innerHTML = `

            <option value="small">
                Ml
            </option>

            <option value="base">
                Litre
            </option>

        `;


        showMoneyMode();

    }


    else {

        weightCalculator
            .classList
            .add("hidden");


        countCalculator
            .classList
            .remove("hidden");


        countUnitName.textContent =

            product.unit === "piece"

                ? "Piece"

                : "Packet";


        updateCountTotal();

    }


    calculatorModal
        .classList
        .remove("hidden");

}


// ==========================================
// GET CURRENT PRICE
// ==========================================

function getCurrentPrice() {

    const price =
        Number(currentPrice.value);


    if (
        !price ||
        price <= 0
    ) {

        return 0;

    }


    return price;

}


// ==========================================
// MONEY MODE
// ==========================================

function showMoneyMode() {

    moneyBox
        .classList
        .remove("hidden");


    quantityBox
        .classList
        .add("hidden");


    moneyMode
        .classList
        .add("active");


    quantityMode
        .classList
        .remove("active");

}


moneyMode.addEventListener(
    "click",
    showMoneyMode
);


// ==========================================
// QUANTITY MODE
// ==========================================

function showQuantityMode() {

    moneyBox
        .classList
        .add("hidden");


    quantityBox
        .classList
        .remove("hidden");


    quantityMode
        .classList
        .add("active");


    moneyMode
        .classList
        .remove("active");

}


quantityMode.addEventListener(
    "click",
    showQuantityMode
);


// ==========================================
// MONEY CALCULATION
// ==========================================

moneyInput.addEventListener(
    "input",
    function () {


        if (!selectedProduct) {

            return;

        }


        const money =
            Number(moneyInput.value);


        const price =
            getCurrentPrice();


        if (
            !money ||
            money <= 0 ||
            !price
        ) {

            moneyResult.textContent =
                "0";


            calculatedQuantity = 0;

            calculatedTotal = 0;

            return;

        }


        const baseQuantity =
            money / price;


        if (
            selectedProduct.unit === "kg"
        ) {

            const grams =
                baseQuantity * 1000;


            if (grams >= 1000) {

                moneyResult.textContent =
                    `${(
                        grams / 1000
                    ).toFixed(2)} Kg`;

            }

            else {

                moneyResult.textContent =
                    `${grams.toFixed(0)} Gram`;

            }

        }


        else if (
            selectedProduct.unit === "litre"
        ) {

            const ml =
                baseQuantity * 1000;


            if (ml >= 1000) {

                moneyResult.textContent =
                    `${(
                        ml / 1000
                    ).toFixed(2)} Litre`;

            }

            else {

                moneyResult.textContent =
                    `${ml.toFixed(0)} Ml`;

            }

        }


        calculatedQuantity =
            baseQuantity;


        calculatedTotal =
            money;

    }

);


// ==========================================
// QUANTITY CALCULATION
// ==========================================

quantityInput.addEventListener(
    "input",
    calculateQuantityPrice
);


quantityUnit.addEventListener(
    "change",
    calculateQuantityPrice
);


currentPrice.addEventListener(
    "input",
    function () {


        if (
            selectedProduct &&
            selectedProduct.unit === "piece"
        ) {

            updateCountTotal();

        }


        if (
            selectedProduct &&
            selectedProduct.unit === "packet"
        ) {

            updateCountTotal();

        }


        if (
            moneyInput.value
        ) {

            moneyInput.dispatchEvent(
                new Event("input")
            );

        }


        if (
            quantityInput.value
        ) {

            calculateQuantityPrice();

        }

    }
);


function calculateQuantityPrice() {

    if (!selectedProduct) {

        return;

    }


    const value =
        Number(quantityInput.value);


    const price =
        getCurrentPrice();


    if (
        !value ||
        value <= 0 ||
        !price
    ) {

        quantityResult.textContent =
            "0";


        calculatedQuantity = 0;

        calculatedTotal = 0;

        return;

    }


    let baseQuantity;


    if (
        quantityUnit.value === "small"
    ) {

        baseQuantity =
            value / 1000;

    }

    else {

        baseQuantity =
            value;

    }


    const total =
        baseQuantity * price;


    quantityResult.textContent =
        total.toFixed(2);


    calculatedQuantity =
        baseQuantity;


    calculatedTotal =
        total;

}


// ==========================================
// PIECE / PACKET
// ==========================================

function updateCountTotal() {

    if (!selectedProduct) {

        return;

    }


    const count =
        Number(countValue.textContent);


    const price =
        getCurrentPrice();


    const total =
        count * price;


    countResult.textContent =
        total.toFixed(2);


    calculatedQuantity =
        count;


    calculatedTotal =
        total;

}


// ==========================================
// PLUS
// ==========================================

plusCount.addEventListener(
    "click",
    function () {


        let count =
            Number(countValue.textContent);


        count++;


        countValue.textContent =
            count;


        updateCountTotal();

    }
);


// ==========================================
// MINUS
// ==========================================

minusCount.addEventListener(
    "click",
    function () {


        let count =
            Number(countValue.textContent);


        if (count > 1) {

            count--;

        }


        countValue.textContent =
            count;


        updateCountTotal();

    }
);


// ==========================================
// ADD TO BILL
// ==========================================

addToBillButton.addEventListener(
    "click",
    function () {


        if (!selectedProduct) {

            return;

        }


        if (
            calculatedQuantity <= 0 ||
            calculatedTotal <= 0
        ) {

            alert(
                "पहले quantity या amount डालें।"
            );

            return;

        }


        const existingItem =
            cart.find(function (item) {

                return (
                    item.id ===
                    selectedProduct.id
                );

            });


        if (existingItem) {

            existingItem.quantity +=
                calculatedQuantity;


            existingItem.total +=
                calculatedTotal;

        }


        else {

            cart.push({

                ...selectedProduct,

                quantity:
                    calculatedQuantity,

                total:
                    calculatedTotal

            });

        }


        calculatorModal
            .classList
            .add("hidden");


        showCart();

    }
);


// ==========================================
// SHOW CART
// ==========================================

function showCart() {

    cartList.innerHTML = "";


    if (cart.length === 0) {

        cartList.innerHTML = `

            <p class="empty-cart">
                अभी कोई item select नहीं किया।
            </p>

        `;


        updateBill();

        return;

    }


    cart.forEach(function (item) {


        const cartItem =
            document.createElement("div");


        cartItem.classList.add(
            "cart-item"
        );


        let quantityText;


        if (
            item.unit === "kg"
        ) {

            const grams =
                item.quantity * 1000;


            if (grams >= 1000) {

                quantityText =
                    `${(
                        grams / 1000
                    ).toFixed(2)} Kg`;

            }

            else {

                quantityText =
                    `${grams.toFixed(0)} Gram`;

            }

        }


        else if (
            item.unit === "litre"
        ) {

            const ml =
                item.quantity * 1000;


            if (ml >= 1000) {

                quantityText =
                    `${(
                        ml / 1000
                    ).toFixed(2)} Litre`;

            }

            else {

                quantityText =
                    `${ml.toFixed(0)} Ml`;

            }

        }


        else {

            quantityText =
                `${item.quantity} ${item.unit}`;

        }


        cartItem.innerHTML = `

            <div class="cart-top">

                <div>

                    <div class="cart-name">
                        ${item.nameEn}
                    </div>

                    <div class="cart-hindi">
                        ${item.nameHi}
                    </div>

                    <div class="cart-quantity">
                        ${quantityText}
                    </div>

                </div>


                <div class="cart-price">

                    ₹${item.total.toFixed(2)}

                </div>

            </div>

        `;


        cartList.append(cartItem);

    });


    updateBill();

}


// ==========================================
// BILL CALCULATION
// ==========================================

function updateBill() {

    let subtotal = 0;


    cart.forEach(function (item) {

        subtotal += item.total;

    });


    let discountPercent =
        Number(discountInput.value) || 0;


    if (discountPercent < 0) {

        discountPercent = 0;

        discountInput.value = 0;

    }


    if (discountPercent > 100) {

        discountPercent = 100;

        discountInput.value = 100;

    }


    const discountAmount =
        subtotal *
        discountPercent /
        100;


    const grandTotal =
        subtotal -
        discountAmount;


    subtotalElement.textContent =
        subtotal.toFixed(2);


    discountAmountElement.textContent =
        discountAmount.toFixed(2);


    grandTotalElement.textContent =
        grandTotal.toFixed(2);

}


// ==========================================
// DISCOUNT
// ==========================================

discountInput.addEventListener(
    "input",
    updateBill
);


// ==========================================
// CLEAR BILL
// ==========================================

clearCartButton.addEventListener(
    "click",
    function () {

        cart = [];

        discountInput.value = 0;

        showCart();

    }
);


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(
    "input",
    showProducts
);


// ==========================================
// CLOSE CALCULATOR
// ==========================================

calculatorClose.addEventListener(
    "click",
    function () {

        calculatorModal
            .classList
            .add("hidden");

    }
);


// ==========================================
// ADD PRODUCT MODAL
// ==========================================

addProductButton.addEventListener(
    "click",
    function () {

        productModal
            .classList
            .remove("hidden");

    }
);


// ==========================================
// CLOSE PRODUCT MODAL
// ==========================================

function closeProductModal() {

    productModal
        .classList
        .add("hidden");

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


cancelProduct.addEventListener(
    "click",
    closeProductModal
);


// ==========================================
// SAVE NEW PRODUCT
// ==========================================

saveProductButton.addEventListener(
    "click",
    function () {


        const nameEn =
            document
                .querySelector("#new-name-en")
                .value
                .trim();


        const nameHi =
            document
                .querySelector("#new-name-hi")
                .value
                .trim();


        const aliasesText =
            document
                .querySelector("#new-aliases")
                .value
                .trim();


        const category =
            document
                .querySelector("#new-category")
                .value;


        const unit =
            document
                .querySelector("#new-unit")
                .value;


        const price =
            Number(
                document
                    .querySelector("#new-price")
                    .value
            );


        if (
            nameEn === "" ||
            nameHi === "" ||
            price <= 0
        ) {

            alert(
                "Product name और सही price भरें।"
            );

            return;

        }


        const aliases =
            aliasesText
                .split(",")
                .map(function (item) {

                    return item.trim();

                })
                .filter(function (item) {

                    return item !== "";

                });


        const newProduct = {

            id: Date.now(),

            nameEn:
                nameEn,

            nameHi:
                nameHi,

            aliases:
                aliases,

            category:
                category,

            unit:
                unit,

            price:
                price

        };


        products.push(
            newProduct
        );


        saveProducts();


        // CLEAR FORM

        document
            .querySelector("#new-name-en")
            .value = "";


        document
            .querySelector("#new-name-hi")
            .value = "";


        document
            .querySelector("#new-aliases")
            .value = "";


        document
            .querySelector("#new-price")
            .value = "";


        closeProductModal();


        showProducts();

        showCategories();

    }
);


// ==========================================
// START APP
// ==========================================

showCategories();

showProducts();

showCart();


// =====================================================
// =====================================================
// LOGIN / REGISTER SYSTEM
// =====================================================
// =====================================================


// ==========================================
// AUTH ELEMENTS
// ==========================================

const authScreen =
    document.querySelector("#auth-screen");
const shopApp =
    document.querySelector("#shop-app");


// ==========================================
// LOGIN ELEMENTS
// ==========================================

const loginBox =
    document.querySelector("#login-box");

const loginUsername =
    document.querySelector("#login-username");

const loginPassword =
    document.querySelector("#login-password");

const loginBtn =
    document.querySelector("#login-btn");

const loginMessage =
    document.querySelector("#login-message");

const showRegisterBtn =
    document.querySelector("#show-register-btn");

const showLoginPassword =
    document.querySelector("#show-login-password");


// ==========================================
// REGISTER ELEMENTS
// ==========================================

const registerBox =
    document.querySelector("#register-box");

const registerUsername =
    document.querySelector("#register-username");

const registerPassword =
    document.querySelector("#register-password");

const registerBtn =
    document.querySelector("#register-btn");

const registerMessage =
    document.querySelector("#register-message");

const showLoginBtn =
    document.querySelector("#show-login-btn");

const showRegisterPassword =
    document.querySelector("#show-register-password");


// ==========================================
// SHOW REGISTER SCREEN
// ==========================================

showRegisterBtn.addEventListener(
    "click",
    function () {

        loginBox.classList.add(
            "hidden"
        );

        registerBox.classList.remove(
            "hidden"
        );

        loginMessage.textContent = "";

    }
);


// ==========================================
// SHOW LOGIN SCREEN
// ==========================================

showLoginBtn.addEventListener(
    "click",
    function () {

        registerBox.classList.add(
            "hidden"
        );

        loginBox.classList.remove(
            "hidden"
        );

        registerMessage.textContent = "";

    }
);


// ==========================================
// LOGIN PASSWORD SHOW / HIDE
// ==========================================

showLoginPassword.addEventListener(
    "click",
    function () {


        if (
            loginPassword.type ===
            "password"
        ) {

            // PASSWORD SHOW

            loginPassword.type =
                "text";


            showLoginPassword.textContent =
                "🙈";

        }

        else {

            // PASSWORD HIDE

            loginPassword.type =
                "password";


            showLoginPassword.textContent =
                "👁️";

        }

    }
);


// ==========================================
// REGISTER PASSWORD SHOW / HIDE
// ==========================================

showRegisterPassword.addEventListener(
    "click",
    function () {


        if (
            registerPassword.type ===
            "password"
        ) {

            // PASSWORD SHOW

            registerPassword.type =
                "text";


            showRegisterPassword.textContent =
                "🙈";

        }

        else {

            // PASSWORD HIDE

            registerPassword.type =
                "password";


            showRegisterPassword.textContent =
                "👁️";

        }

    }
);


// ==========================================
// REGISTER
// ==========================================

registerBtn.addEventListener(
    "click",
    async function () {


        const username =
            registerUsername.value.trim();


        const password =
            registerPassword.value;


        // EMPTY CHECK

        if (
            !username ||
            !password
        ) {

            registerMessage.textContent =
                "Username aur password bharo ❌";

            return;

        }


        try {


            const response =
                await fetch(
                    "/register",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            username:
                                username,

                            password:
                                password

                        })

                    }
                );


            const data =
                await response.json();


            registerMessage.textContent =
                data.message;


            // ==================================
            // REGISTRATION SUCCESS
            // ==================================

            if (response.ok) {


                registerMessage.textContent =
                    "Registration successful ✅";


                // Username automatically
                // login box me aa jayega

                loginUsername.value =
                    username;


                // Register screen hide

                registerBox.classList.add(
                    "hidden"
                );


                // Login screen show

                loginBox.classList.remove(
                    "hidden"
                );


                // Password clear

                registerPassword.value = "";


                // Login password empty

                loginPassword.value = "";

            }

        }


        catch (error) {


            console.log(error);


            registerMessage.textContent =
                "Server se connection nahi ho raha ❌";

        }

    }
);


// ==========================================
// LOGIN
// ==========================================

loginBtn.addEventListener("click", async function () {

    const username =
        loginUsername.value.trim();

    const password =
        loginPassword.value;

    if (!username || !password) {

        loginMessage.textContent =
            "Username aur password required hai ❌";

        return;
    }

    try {

        const response =
            await fetch(
                "/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }
            );

        const data =
            await response.json();

        loginMessage.textContent =
            data.message;

        if (response.ok) {

            loginMessage.textContent =
                "Login successful ✅";

            setTimeout(
                function () {

                    authScreen.style.display =
                        "none";

                    shopApp.style.display =
                        "block";

                },
                500
            );

        }

    } catch (error) {

        console.log(error);

        loginMessage.textContent =
            "Server se connection nahi ho raha ❌";

    }

});