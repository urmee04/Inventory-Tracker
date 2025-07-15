### Lab 6.1: TypeScript and Object-Oriented Programming

---

#### Overview

Create a simple object-oriented inventory tracker using TypeScript. The tracker will distinguish between PhysicalProduct and DigitalProduct, calculate applicable taxes, and manage inventory using modules. This lab will reinforce the key object-oriented programming concepts learned in the last lesson, including inheritance, encapsulation, abstraction, and polymorphism, while using TypeScript features such as type annotations and interfaces.

#### Objective

By the end of this lab, we will demonstrate the ability to use TypeScript with type annotations, interfaces, and object-oriented programming concepts to build a small yet functional object-oriented system.

#### Instructions

**_Project Setup:_**

- Create a new directory for the project and initialize it with npm:

```bash
mkdir inventory-tracker
cd inventory-tracker
npm init -y
```

- Install TypeScript and other dependencies:

```bash
npm install typescript @types/node --save-dev
```

- Create a tsconfig.json file:

```bash
npx tsc --init
```

---

#### Set up a basic folder structure for the project:

```bash
inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   │   ├── PhysicalProduct.ts
│   │   └── DigitalProduct.ts
│   ├── utils/
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
```

#### How to Clone and Run the Project

---

**Clone the Repository**

```bash
git clone https://github.com/urmee04/Inventory-Tracker.git
cd inventory-tracker
```

**Install Dependencies**

```bash
npm install
```

**Compile TypeScript**

```bash
npx tsc
```

**Run the Compiled Code**

```bash
node main.js
```

---

#### Critical Thinking

**How does TypeScript enforce type safety in this object-oriented program?**

TypeScript enforces type safety in this object-oriented program by using explicit types for class properties, constructor parameters, method return types, and function arguments. For instance, the Product class and its subclasses (PhysicalProduct, DigitalProduct) clearly define the types of sku, name, price, weight, and fileSize, ensuring that incorrect values (like a string where a number is expected) are caught at compile time. Moreover, since the calculateTax function accepts a parameter of type Product, TypeScript guarantees that any object passed into it must conform to the structure and behavior defined by the Product class. This minimizes runtime errors and improves code reliability by catching type-related issues early during development.

**How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?**

Inheritance reduced code duplication by allowing both PhysicalProduct and DigitalProduct to extend the shared base class Product, inheriting common properties and methods such as sku, name, price, displayDetails(), and the original getPriceWithTax() logic. This avoids rewriting the same logic in each subclass. Instead, the subclasses only need to override methods (like getPriceWithTax()) when their behavior differs (e.g., different tax rates). By centralizing shared functionality in the Product base class, the code becomes more maintainable, making it easier to extend and debug.

**What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?**

Although my current code uses only public properties, encapsulation and access modifiers like private and protected would help protect the integrity of product data and enforce better design. For instance, if price were made private, it could only be accessed or modified through controlled methods like setPrice() or getPriceWithTax(), ensuring validation or business logic (like tax enforcement) is always applied. Using protected allows base class members to be accessible in subclasses but not from outside the class hierarchy, encouraging abstraction while still supporting extensibility. Proper encapsulation makes code more secure, less error-prone, and easier to refactor without unintended side effects.

**If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?**

Polymorphism allows different product types to be treated uniformly while still providing customized behavior. For example, if created a new SubscriptionProduct class that extends Product and overrides methods like getPriceWithTax(), you could still loop through all products and call displayDetails() or getPriceWithTax() without modifying the loop logic. This is because all subclasses share a common interface defined by the Product class. Thanks to polymorphism, methods can behave differently depending on the actual subclass instance while maintaining the same method signatures. This makes the code extensible, new product types can be introduced with minimal changes to the existing application logic.

---

#### Resources

- [TS-Override](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag)

- [MDN:getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

- [Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)

- [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

- [TS-tutorial](https://www.youtube.com/watch?v=CHnTTzD1pAQ&list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3)
