// Base class with properties initialized via constructor

class Product {
  name: string;
  price: number;
  sku: string;

  constructor(sku: string, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.sku = sku;
  }
}
