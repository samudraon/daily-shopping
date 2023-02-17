let count = 0;
// let totalPrice = 0;

/* for first card */
document.getElementById('first-card').addEventListener('click', function () {
    /* get the data from html using id */
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    count++;
    /* show the data */
    displayData(productName, productPrice, productQuantity, priceTotal);
});

/* for second card */
document.getElementById('second-card').addEventListener('click', function (e) {
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    count++;
    displayData(pName, pPrice, pQuantity, sumTotal);
});

/* third card */
document.getElementById('third-card').addEventListener('click', function () {
    /* get the data from html using id */
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    count++;
    /* show the data */
    displayData(productName, productPrice, productQuantity, priceTotal);
});
/* get fifth card */
document.getElementById('last-card').addEventListener('click', function () {
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;
    if (productPrice == '' || productQuantity == '' || productPrice <= 0 || productQuantity <= 0) {
        return alert('please enter any valid number')
    }

    const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
    count++;
    displayData(productName, productPrice, productQuantity, priceTotal);
})

/* common function */
function totalPrice() {
    const total = document.getElementById('total-price');
}










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
}