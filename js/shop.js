// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array
const buy = (id) => {
    // cerquem el producte
    for(const product of products) {
        if(product.id === id) {

            // coomprovem si ja hi és a cart
            let found = false;
            for(const item of cart) {
                if(item.id === id) {
                item.quantity++;
                found = true;
                break;
                }
            }

          // si no hi és, l'afegim ara amb l'atribut quantity:1
          if(!found) {
            const productToAdd =  {...product, quantity: 1}
            cart.push(productToAdd);
            }
            console.log(`${product.name} add to cart!`);
            console.log(cart);    
        }
    }
};

const buttons = document.querySelectorAll(".add-to-cart");
    for(const button of buttons) {
        button.addEventListener("click", ()=> { 
            const productId = Number(button.dataset.productId);// agafem id del producte del data attribute
            buy(productId);
        });   
    }

// Exercise 2
const cleanCart = () =>  { 
    cart.length =0;     
    console.log("Empty cart");        
    console.log(cart); 
}  
    const cleanCartButtom = document.getElementById("clean-cart"); 
    cleanCartButtom.addEventListener("click", cleanCart );

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}