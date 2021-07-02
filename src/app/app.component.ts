import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialApp';
  categoryName = "Telefon";

  products = [
    { id: 1, name: "Samsung S5", price: 2000, isActive: true },
    { id: 2, name: "Samsung S6", price: 3000, isActive: false },
    { id: 3, name: "Samsung S7", price: 4000, isActive: true },
    { id: 4, name: "Samsung S8", price: 5000, isActive: false },
    { id: 5, name: "Samsung S9", price: 6000, isActive: true },
  ];
}
