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

  addProduct(product: Product) {
    this.model.products.push(product); // liste üzerine eleman ekleyecek metod bu
  }
}
