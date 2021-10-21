function solve() {
    let allbuttons = document.getElementsByTagName('button');
    let textarea = document.getElementsByTagName('textarea')[0];
    let totalPrice = 0;
    let allOrderedProducts = [];

    for (const button of allbuttons) {
        button.addEventListener('click', () => {
            if (button.className === 'checkout') {
                selectedCheckout();
            }

            addProductToCart(button);
        })  
    }

    function selectedCheckout() {
        let productsList = allOrderedProducts.join(', ');
        textarea.innerHTML += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
        for (const button of allbuttons) {
            button.setAttribute('disabled', true);
        }
    }

    function addProductToCart(button) {
        let parentProductAdd = button.parentElement;
        let productDetails = parentProductAdd.previousElementSibling;
        let productTitle = productDetails.firstElementChild.textContent;
        let productPrice = parentProductAdd.nextElementSibling.textContent;
        totalPrice += Number(productPrice);
        textarea.innerHTML += `Added ${productTitle} for ${productPrice} to the cart.\n`;
        if (!allOrderedProducts.includes(productTitle)) {
            allOrderedProducts.push(productTitle);
        }
    }
}