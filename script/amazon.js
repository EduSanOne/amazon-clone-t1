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

const slides = document.querySelector('.slides-promo');
const totalSlides = document.querySelectorAll('.promo-image').length;

let index = 0;

document.querySelector('.js-button-right').addEventListener('click', () => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.js-button-left').addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
});