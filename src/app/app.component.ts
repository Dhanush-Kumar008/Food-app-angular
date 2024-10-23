import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodCategoryComponent } from './food-category/food-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FoodCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<app-food-category></app-food-category>`,  // Use the component in template

})
export class AppComponent {
  title = 'food-app';
}
