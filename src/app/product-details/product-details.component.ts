import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product !: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(id: any, name: string, price: string, isactive: boolean) {

    const p = new Product(id, name, price, isactive);
    this.productService.saveProduct(p);
    //this.product = null; // seçili olan elemanı sıfırlayalım ki güncelleme yapılsın ve formda ekranda kaybedilsin. tabi yapamıyoruz versiyondan

  }

}
