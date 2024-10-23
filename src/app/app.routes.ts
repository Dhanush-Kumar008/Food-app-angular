import { RouterModule, Routes } from '@angular/router';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { LoginComponent } from './login/login.component';
import { RestaurentItemComponent } from './restaurent-item/restaurent-item.component';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"",redirectTo:"/foodcategory",pathMatch:'full'},
    {path:"foodcategory",component:FoodCategoryComponent},
    {path:"login",component:LoginComponent},
    {path:"restaurentitem/:categoryId",component:RestaurentItemComponent},
    
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
