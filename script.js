let allTotal = 0;
function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity =  mainEl.querySelector('input').value;
    let cartItm = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) {
        price = price.substring(1); //remove % from price
        price = parseInt(price);
        quantity = parseInt(quantity);
        let total = price * quantity;

        cartItm.innerHTML +=
            `<div class = 'cart-single-item'> 
		<p><h4> ${name} </h4>  $${price} x ${quantity} = $<span>${total}</span></p> 
		<button onclick="removeFromCart(this)" class = "remove-item"> Remove </button
		</div>`
        allTotal +=total;
        document.querySelector('.total').innerText = `Total: ${allTotal}$`
        element.innerText = 'Added';
        element.setAttribute('disabled','true');
    }else{
        alert('Odberi kolicina');

    }
}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price_total = mainEl.querySelector('span').innerText;
    price_total = parseInt(price_total);
    allTotal -= price_total;
    document.querySelector('.total').innerText =`Total: $${allTotal}`;
    let name = mainEl.querySelector('h4').innerText;
    let fruits = document.querySelectorAll('.single-item');
    mainEl.remove();

    fruits.forEach(function (f){
        let itemName =  f.querySelector('.si-content h3').innerText;
        if(itemName === name){
            f.querySelector('.actions input').value=0;
            f.querySelector('.actions button').removeAttribute('disabled');
            f.querySelector('.actions button').innerText = 'Add';
        }
    });
}