class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.products = [];
        this.allProducts = [];
        this.fetchProducts();
    }

    fetchProducts() {
        this.products = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    getSum() {
        let sum = 0;
        for (let i = 0; i < this.allProducts.length; i++) {
            sum += this.allProducts[i].price;
          }
        console.log(sum);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class ProductItem {
    constructor(product, img = "pictures/pic.png") {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item data-id="${this.id}">
        <img src=${this.img}>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}

class Cart {
    addProduct() {

    }
    
    removeProduct() {

    }
    
    changeProduct() {

    }
    
    render() {

    }
}

class ItemCart {
    render() {

    }
}

let list = new ProductsList();
list.render();
list.getSum();