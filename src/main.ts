import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

// Create instances for both products
const products = [
  new PhysicalProduct("001", "Laptop", 5, 1),
  new DigitalProduct("002", "ipad", 10, 1.0),
];

//loop through products and use polymorphic behavior
for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Price with tax: $${product.getPriceWithTax().toFixed(2)}`);
  //use instanceof to check which subclass and show details
  if (product instanceof PhysicalProduct) {
    console.log(`Product weight: ${product.weightWithKg}`);
  } else if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.sizeWithMb}`);
  }
}
