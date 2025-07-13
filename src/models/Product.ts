// Base class with properties initialized via constructor

export class Product {
  /**
   * Static tax rate (5%) applicable to all products.
   * Used in price or tax calculations.
   */
  static taxRate = 0.05;
  sku: string; // Product stock keeping unit
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  // Method that calculates the final price of the product with tax
  getPriceWithTax(): number {
    return this.price * (Product.taxRate + 1);
  }
  // method that returns a formatted string with the product’s details
  displayDetails(): string {
    return `sku: ${this.sku} name: ${this.name}  costs: $${this.price}.`;
  }
}
