/** @format */
// Shopping Cart System

// Create:

// Product
// - name
// - price

// Cart
// - addProduct()
// - removeProduct()
// - getTotal()

type Product = {
    name: string,
    price: number
};

class Cart {
   
    products: Product[];

  constructor() {
      this.products = [];

  }

    addProduct(prod : Product) {
      this.products.push(prod)
    }

    // removeProduct(prod : any) {

    //     if (this.product.includes(prod)) {
    //         this.product.pop();
    //     }
    // }
    // getTotal() {
    //     return this.product.length
    // }
}

const cart = new Cart();

console.log(cart.addProduct({ name:"shoes", price: 1200}));