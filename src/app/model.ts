export class Model {
  categoryName: string;
  products: Array<Product>;

  constructor() {
    this.categoryName = "Telefon";
    this.products = [
      new Product(1, "Samsung s5", 2000, true),
      new Product(2, "Samsung s6", 3000, true),
      new Product(3, "Samsung s7", 4000, false),
      new Product(4, "Samsung s8", 5000, true),
      new Product(5, "Samsung s9", 6000, false),
      new Product(6, "Samsung s10", 7000, true)

      // { id: 1, name: "Samsung S5", price: 2000, isActive: true },
      // { id: 2, name: "Samsung S6", price: 3000, isActive: false },
      // { id: 3, name: "Samsung S7", price: 4000, isActive: true },
      // { id: 4, name: "Samsung S8", price: 5000, isActive: false },
      // { id: 5, name: "Samsung S9", price: 6000, isActive: true },
    ];
  }
}

// products dizisin içerisinde ki herbir elemanı da ayrı bir class içerisinde tanımlamak istiyoruz.

export class Product {
  id !: number;
  name !: string;
  price !: number;
  isActive !: boolean;

  constructor(id: number, name: string, price: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}

