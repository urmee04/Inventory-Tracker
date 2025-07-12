/*Add a function calculateTax()
 ** that accepts a Product object and returns the price including tax.
 */
import { Product } from "../models/Product";

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
