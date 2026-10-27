let cart = [];


// ======================
// ДОБАВИТЬ В КОРЗИНУ
// ======================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert("Товар добавлен в корзину!");
}


// ======================
// ОБНОВИТЬ КОРЗИНУ
// ======================

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let sum = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Корзина пока пустая.</p>";

    }


    cart.forEach(function(item, index) {

        sum += item.price;

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>
                ${item.name}
            </span>

            <strong>
                ${item.price} сом
            </strong>

            <button onclick="removeFromCart(${index})">
                Удалить
            </button>
        `;

        cartItems.appendChild(div);

    });


    total.innerText =
        "Итого: " + sum + " сом";
}


// ======================
// УДАЛИТЬ ИЗ КОРЗИНЫ
// ======================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// ======================
// ФИЛЬТР ТОВАРОВ
// ======================

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        if (product.classList.contains(category)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ======================
// ПОКАЗАТЬ ВСЕ ТОВАРЫ
// ======================

function showProducts() {

    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        product.style.display = "block";

    });


    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ======================
// РЕГИСТРАЦИЯ
// ======================

function register(event) {

    event.preventDefault();


    let name =
        document.getElementById("name").value;

    let city =
        document.getElementById("city").value;


    document.getElementById(
        "registrationMessage"
    ).innerText =
        "Спасибо, " + name +
        "! Вы зарегистрированы.";


    console.log("ФИО:", name);

    console.log("Место жительства:", city);

}