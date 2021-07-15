import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  // işte şimdi inject işlemi yapmamız gerekiyor.

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(name: string, price: string, isactive: boolean) {

    const p = new Product(0, name, price, isactive);
    this.productService.saveProduct(p);

  }
}
