import { Product } from "./Product";
// Define the DigitalProduct class extending the Product class
export class DigitalProduct extends Product {
  // Static tax rate for all digital products(0%)
  static taxRate = 0;
  fileSize: number;
  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  // Override the getPriceWithTax method to include a 0% tax rate
  override getPriceWithTax(): number {
    return this.price * (DigitalProduct.taxRate + 1);
  }

  // Getter method to return the formatted file size in mb
  get sizeWithMb(): string {
    return `${this.fileSize} mb`;
  }
}
