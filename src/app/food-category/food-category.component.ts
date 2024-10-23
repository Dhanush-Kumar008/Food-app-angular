import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-food-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-category.component.html',
  styleUrl: './food-category.component.css'
})
export class FoodCategoryComponent  {
  foodcategories:any[]=[] 
  constructor(private master:FoodServiceService,private route:Router){
     this.loadAllFoodCategory()
  }

  loadAllFoodCategory(){
    this.master.getAllFoodCategory().subscribe((res:any)=>{
    this.foodcategories=res.data;
  })
}

  navigateToFoodCategory(categoryname:any){
    this.route.navigate(['/restaurentitem',categoryname])
    
  }

}
