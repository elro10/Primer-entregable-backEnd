class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }
    generateUniqueId() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000000);
        const uniqueId = timestamp.toString() + '-' + randomNumber.toString();
        return uniqueId;
    }
    addProduct(product) {
        if (this.products.some(p => p.code === product.code)) {
        throw new Error('Product code already exists');
        }
        const newProduct = {
            id: this.generateUniqueId(),
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock
        };
        this.products.push(newProduct);
        return newProduct;
    }
    getProductById(code) {
        const product = this.products.find((p) => p.code === code);
        if (!product) {
            throw new Error(`Not found`);
        }
        return product;
    }

}
const productManager = new ProductManager();

const products = productManager.getProducts();
    console.log(products); 

    const newProduct = {
    id: this.uniqueId,
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
};
let addedProduct = productManager.addProduct(newProduct);
console.log(addedProduct); 

let getProductById= productManager.getProductById('abc123')
console.log(getProductById);

try{
    let addedProduct = productManager.addProduct(newProduct);
    console.log(addedProduct); 
}
catch (error) {
    console.error('Product code already exists');
};

try{
    let getProductById= productManager.getProductById('abc123s')
console.log(getProductById);
}
catch (error) {
    console.error('Not found');
}