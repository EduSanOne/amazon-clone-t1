import { products , titles } from "../data/products.js";

let productsboxHTML = '';


// Create 8 box
for(let i = 0; i < 8; i++){
    productsboxHTML += `
        <div class="products-box js-products-box-${i}" >
            <div class="product-title-box">
                <h3 class="product-title">${titles[i]}</h3>
            </div>
        </div>
    `
}

document.querySelector('.grid-layout').innerHTML = productsboxHTML;


let productHTML = '';

// Add the 32 products
for(let i = 0; i < 32; i++){
    
    const boxIndex = Math.floor(i / 4); // decides which box
    
    let image_att = products[i].image;
    productHTML = `
        <div class="product-card">
            <img src="${image_att}" alt="" class="product">
        </div>
    `

    document.querySelector(`.js-products-box-${boxIndex}`).innerHTML += productHTML;
}

let maxQuantity = 1;
let quantityMoved = 0;

document.querySelector('.js-button-right').addEventListener('click', ()=>{
    
    if (maxQuantity == 7) {
        maxQuantity = 1;
        quantityMoved = 0;
        
        document.querySelectorAll('.promo-image').forEach((element) => {
            console.log(quantityMoved)
            element.style.transform = `translateX(-${quantityMoved}%)`;
        })

    } else {
        quantityMoved += 100;
        maxQuantity++
        
        document.querySelectorAll('.promo-image').forEach((element) => {
           
            element.style.transform = `translateX(-${quantityMoved}%)`;
            
        })
    }
    
   
})

document.querySelector('.js-button-left').addEventListener('click', ()=>{
    
    if (maxQuantity == 7) {
        maxQuantity = 1;
        quantityMoved = 700;
        
        document.querySelectorAll('.promo-image').forEach((element) => {
            console.log(quantityMoved)
            element.style.transform = `translateX(-${quantityMoved}%)`;
        })

    } else {
        quantityMoved += 100;
        maxQuantity++
        
        document.querySelectorAll('.promo-image').forEach((element) => {
           
            element.style.transform = `translateX(-${quantityMoved}%)`;
            
        })
    }
    
   
})