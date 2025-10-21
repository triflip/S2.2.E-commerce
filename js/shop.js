import { products } from './products.js';


// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const buy = (id) => {
    
    for(const product of products) {
        if(product.id === id) {


            let found = false;
            for(const item of cart) {
                if(item.id === id) {
                item.quantity++;
                found = true;
                break;
                }
            }

          
            if(!found) {
                const productToAdd =  {...product, quantity: 1}
                cart.push(productToAdd);
            }
            console.log(`${product.name} add to cart!`);
            console.log(cart);     
            applyPromotionsCart();
            console.log(calculateTotal());
             
           
            printCart();
            }
    }
};

const buttons = document.querySelectorAll(".add-to-cart");
    for(const button of buttons) {
        button.addEventListener("click", ()=> { 
            const productId = Number(button.dataset.productId);
            buy(productId);
        });   
    }

// Exercise 2
const cleanCart = () =>  { 
    cart.length =0;     
    printCart();
    console.log("Empty cart");        
    console.log(cart); 
}  
    const cleanCartButtom = document.getElementById("clean-cart"); 
    cleanCartButtom.addEventListener("click", cleanCart );


const calculateTotal = () =>  {
    let totalPrice = 0;
   
    for(const item of cart) {
        if(item.subtotalWithDiscount) {
            totalPrice += item.subtotalWithDiscount;
        } else { 
        totalPrice += item.price * item.quantity;
        }
    }
    return totalPrice;
}


const applyPromotionsCart = () =>  {
   for(const item of cart) {
        if(item.offer && item.quantity >= item.offer.number) {

        
        if(!item.originalPrice) item.originalPrice = item.price;
        
        const discountedPrice = item.originalPrice * (1 - item.offer.percent /100); 
       
       
        item.subtotalWithDiscount = discountedPrice * item.quantity;
        }else {
        
            item.subtotalWithDiscount = item.price * item.quantity
        }
    }
};


const printCart = () => {
   
    const cartListBody = document.getElementById("cart_list");
    const totalPriceEl = document.getElementById("total_price");
    const countProductEl = document.getElementById("count_product");

   
   cartListBody.innerHTML = "";

   let totalArticles = 0;

   for(const item of cart) {
    
    const tr = document.createElement("tr");
   
    tr.innerHTML = `
    <th scope = "row">${item.name}</th>
    <td>$${item.price.toFixed(2)}</td>
    <td>${item.quantity}</td>
    <td>$${item.subtotalWithDiscount ? item.subtotalWithDiscount.toFixed(2) : (item.price * item.quantity).toFixed(2)} </td>
    <td>
    <button onclick="removeFromCart(${item.id})">–</button>
  </td>
    `;

    cartListBody.appendChild(tr);

    totalArticles += item.quantity;
}
    countProductEl.textContent = totalArticles;
    
    totalPriceEl.textContent = calculateTotal().toFixed(2);
}


    const cartModal = document.getElementById("cartModal");
   
    cartModal.addEventListener("show.bs.modal", () => {
        printCart();
    });


// Exercise 7
function removeFromCart(id) {
  
  const productInCart = cart.find(item => item.id === id);

  if (productInCart) {
    if (productInCart.quantity > 1) {
      
      productInCart.quantity--;
    } else {
      
      const index = cart.findIndex(item => item.id === id);
      cart.splice(index, 1);
    }

    
    applyPromotionsCart(cart);

    
    printCart();
  }
}
window.removeFromCart = removeFromCart;


const open_modal = () =>  {
    printCart();
}