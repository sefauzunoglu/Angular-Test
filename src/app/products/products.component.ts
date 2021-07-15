import { Component, OnInit } from '@angular/core';
import { Model, Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

// artık bir productservise ihtiyaç duyuyor.
export class ProductsComponent implements OnInit {

  products !: Product[];
  selectedProduct !: Product; // burada seçilen product bilgisinide detaylarını göstermek için bir componente ihtiyacımız var. O component içerieine göndereceğiz. Seçmiş olduğumuz bir product bilgisini başka bir componente input olarak göndermemiz gerekiyor.

  constructor(private productService: ProductService) { }

  ngOnInit(): void { // bu metot constructordan sonra çalışan bir yapı. constructor içinde önce product servisi inject ediyoruz ve inject ettikten sonra ngOnInit() metodu çalışıyor ve ilgili component, tanımlamış olduğumuz product listesinin içerisini servis üzerinden dolduruyor. Yani constructor çalışsın nesnelerimiz bize gelsin ve nesne geldikten sonra o nesneyi kullanmaya başlayalım şeklinde ngOnInit()'i kullanabiliyoruz.
    this.products = this.productService.getProducts();
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

}
