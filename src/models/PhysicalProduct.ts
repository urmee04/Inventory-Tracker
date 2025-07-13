import { Product } from "./Product";
// Define the PhysicalProduct class extending the Product class
export class PhysicalProduct extends Product {
  // Static tax rate for all physical products
  static taxRate = 0.1;
  weight: number;
  // Constructor to initialize the product with weight
  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }
  // Override the getPriceWithTax method to include a 10% tax rate
  override getPriceWithTax(): number {
    return this.price * (PhysicalProduct.taxRate + 1);
  }
  // Getter method to return the formatted weight in kilograms
  get weightWithKg(): string {
    return `${this.weight} kg`;
  }
}
