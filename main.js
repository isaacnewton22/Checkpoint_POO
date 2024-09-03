class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }


}

class ShoppingCartItem{
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice(){
        return this.product.price * this.quantity;
    }
}

class ShoppingCart{
    constructor(){
        this.cartItems = [];
    }
    addItem(product, quantity){
        const exist = this.cartItems.find(item => item.product.id === product.id);
        if(!exist){
            const newItem = new ShoppingCartItem(product, quantity);
            this.cartItems.push(newItem);
        }
    }

    totalItems(){
        return this.cartItems.length;
    }

    removeItem(productId){
        this.cartItems = this.cartItems.filter(item => item.product.id!== productId);
    }

    displayItems(){
        this.cartItems.forEach(item => console.log(`Product : ${item.product.name} quantity : ${item.quantity} totalprice : ${item.getTotalPrice()}`));
    }

}

const product1 = new Product(1, 'Riz', 4500)
const product2 = new Product(2, 'Viande', 5000)
const product3 = new Product(3, 'Banane', 1000)

const Cart = new ShoppingCart()

Cart.addItem(product1, 3)
Cart.addItem(product2, 5)
Cart.addItem(product3, 1)

Cart.displayItems() // Output: Product : Riz quantity : 3 totalprice : 13500 Product : Viande quantity : 5 totalprice : 25000 Product : Banane quantity : 1 totalprice : 1000

Cart.removeItem(2)

console.log('_______________________________________________________________')

Cart.displayItems()
