import { Injectable } from '@angular/core';
import { Model, Product } from './model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  model = new Model();

  constructor() { }

  getProducts() {
    return this.model.products;
  }

  // addProduct(product: Product) {
  //   this.model.products.push(product); // liste üzerine eleman ekleyecek metod bu
  // }

  getProductById(id: number) {
    return this.model.products.find(i => i.id == id);
  }

  saveProduct(product: Product) { // hem ekleme hem güncelleme yapsın

    if (product.id == 0) {
      product.id = this.getProducts().length + 1;
      this.model.products.push(product);
    }
    else {
      const p: any = this.getProductById(product.id); // id yi formdan göndermemiz gerekiyor
      p.name = product.name;
      p.price = product.price;
      p.isActive = product.isActive;
    }

  }
}
