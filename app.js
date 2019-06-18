//variables

const cartBtn = document.getElementsByClassName('cart-btn');
const closeCartBtn = document.getElementsByClassName('close-cart');
const clearCartBtn = document.getElementsByClassName('clear-cart');
const cartDOM = document.getElementsByClassName('cart');
const cartOverlay = document.getElementsByClassName('cart-overlay');
const cartItems = document.getElementsByClassName('cart-items');
const cartTotal = document.getElementsByClassName('cart-total');
const cartContent = document.getElementsByClassName('cart-content');
const productsDOM = document.getElementsByClassName('products-center');

//Cart
let cart = [];


//getting the products
class Products {

    async getProducts() {
        try {
            //change to fetch from URL
            let result = await fetch('products.json');
            let data = await result.json();


            let products = data.items;
            products = products.map(item => {
                const {
                    title,
                    price
                } = item.fields;
                const {
                    id
                } = item.sys;
                const image = item.fields.image.fields.file.url;
                return {
                    title,
                    price,
                    id,
                    image
                };
            });
            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

// display products
class UI {

}

// local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts()
        .then(products => console.log(products));
});