let total = 0;

function handleClickBtn(target) {
    const selectedItemsContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.querySelector('h5').innerText;
    const price = parseFloat(target.parentNode.querySelector('h6').innerText.split(' ')[1]);

    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);

    // Calculate total
    total += price;
    const firstTotal = document.getElementById('total');
    firstTotal.innerText = total;

    // Calculate grand total
    const discount = parseFloat(document.getElementById('discount').innerText);
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = (total - discount);
}

// Event listener for the "Apply" button
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode === 'Hero') {
        const discount = parseFloat(document.getElementById('total').innerText) * 0.20;
        document.getElementById('discount').innerText = discount;
        const grandTotal = parseFloat(document.getElementById('total').innerText) - discount;
        document.getElementById('grand-total').innerText = grandTotal;
    } else {
        alert('Invalid coupon code');
    }
});
