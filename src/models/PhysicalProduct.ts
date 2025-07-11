import { Product } from "./Product";
// Define the PhysicalProduct class extending the Product class
class PhysicalProduct extends Product {
  // Static tax rate for all physical products
  static taxRate = 0.1;
  weight: number;
  // Constructor to initialize the product with weight
  constructor(name: string, price: number, sku: string, weight: number) {
    super(name, price, sku);
    this.weight = weight;
  }
  // Override the getPriceWithTax method to include a 10% tax rate
  override getPriceWithTax(): number {
    return this.price * (PhysicalProduct.taxRate + 1);
  }
  // Getter method to return the formatted weight in kilograms
  getWeightWithKg(): string {
    return `(Weight of this product is ${this.weight})kg`;
  }
}
