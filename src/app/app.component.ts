import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialApp';

  // model = new Model();

  // // model bilgisi içerisindeki bilgilere ulaşmak için ise;

  // getCatName() {
  //   return this.model.categoryName;
  // }

  // getProducts() {
  //   return this.model.products;
  // } 
}
