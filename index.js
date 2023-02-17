let count = 0;
let productTotalPrice = 0;

/* for first card */
document.getElementById('first-card').addEventListener('click', function () {
    /* get the data from html using id */
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    count++;
    productTotalPrice += priceTotal;
    totalPrice(productTotalPrice);
    /* show the data */
    displayData(productName, productPrice, productQuantity, priceTotal);
    disabledButton('first-card');
});

/* for second card */
document.getElementById('second-card').addEventListener('click', function (e) {
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    count++;
    productTotalPrice += sumTotal;
    totalPrice(productTotalPrice);
    displayData(pName, pPrice, pQuantity, sumTotal);
    disabledButton('second-card');
});

/* third card */
document.getElementById('third-card').addEventListener('click', function () {
    /* get the data from html using id */
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    count++;
    productTotalPrice += priceTotal;
    totalPrice(productTotalPrice);
    /* show the data */
    displayData(productName, productPrice, productQuantity, priceTotal);
    disabledButton('third-card');
});

/* get fifth card */
document.getElementById('last-card').addEventListener('click', function () {
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;

    const priceTotal = parseInt(productPrice) / parseInt(productQuantity);

    if (productPrice == '' || productQuantity == '' || productPrice <= 0 || productQuantity <= 0 || isNaN(productPrice) || isNaN(productQuantity)) {
        return alert('please enter any valid number');
    }
    count++;
    productTotalPrice += priceTotal;
    totalPrice(productTotalPrice);
    displayData(productName, productPrice, productQuantity, priceTotal);
    disabledButton('last-card');
});


/* common function */
function displayData(nameOfProduct, priceOfProduct, quantityOfProduct, result) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${nameOfProduct}</td>
    <td>${priceOfProduct}</td>
    <td>${quantityOfProduct}</td>
    <td>${result}</td>
    `
    tableContainer.appendChild(tr);
};

function totalPrice(price) {
    const totalPrice = document.getElementById('total-price');
    // const p = document.createElement('p');
    totalPrice.innerHTML = `
    <h1 class='text-center font-bold'>Total Price: ${price}</h1>
    `
    // totalPrice.innerHTML = p;
};

/* button disable */
function disabledButton(id) {
    document.getElementById(id).setAttribute('disabled', true);
};