export class Model {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(1, "Samsung s5", "2000", true),
      new Product(2, "Samsung s6", "3000", true),
      new Product(3, "Samsung s7", "4000", false),
      new Product(4, "Samsung s8", "5000", true),
      new Product(5, "Samsung s9", "6000", false),
      new Product(6, "Samsung s10", "7000", true)
    ];
  }
}

// products dizisin içerisinde ki herbir elemanı da ayrı bir class içerisinde tanımlamak istiyoruz.

export class Product {
  id !: number;
  name !: string;
  price !: string;
  isActive !: boolean;

  constructor(id: number, name: string, price: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}

