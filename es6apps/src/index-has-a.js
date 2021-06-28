
class ProductService {
    constructor() {

    }
    findAll() {
        return [{
            id: 1,
            name: 'p1'
        },
        {
            id: 2,
            name: 'p2'
        }
        ]
    }
}
class OrderService {

    constructor(productService) {
        this.productService = productService
    }
    getProduct() {
        return this.productService.findAll()
    }
}
let oService = new OrderService(new ProductService());
console.log(oService.getProduct())