import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Model();

  // model bilgisi içerisindeki bilgilere ulaşmak için ise;

  getCatName() {
    return this.model.categoryName;
  }

  getProducts() {
    return this.model.products;
  }

}
