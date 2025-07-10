// Base class with properties initialized via constructor

class Product {
  /**
   * Static tax rate (5%) applicable to all products.
   * Used in price or tax calculations.
   */
  static taxRate = 0.05;
  name: string;
  price: number;
  sku: string;

  constructor(sku: string, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.sku = sku;
  }
  // Method that calculates the final price of the product with tax
  getPriceWithTax(): number {
    return this.price * (Product.taxRate + 1);
  }
  // method that returns a formatted string with the product’s details
  displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
  }
}
