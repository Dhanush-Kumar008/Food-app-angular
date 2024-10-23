import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FoodServiceService } from '../services/food-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurent-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './restaurent-item.component.html',
  styleUrl: './restaurent-item.component.css'
})
export class RestaurentItemComponent {
  selectedItem:any;
  orderObj:any={
    "userId": 0,
    "totalAmount": 0,
    "restaurantId": 0,
    "deliveryAddress": ""
  }

  foodCategory:any[]=[]
  constructor(private master: FoodServiceService,private activate:ActivatedRoute){
    this.activate.params.subscribe((res:any)=>{
      this.loadFoodItemByCategory(res.categoryId)
    })

  }
  quantity!:String;

  quantityPopup(item:any){
    var getdiv=document.getElementById("popup-div");
    if(getdiv !=null){
      getdiv.style.display="block"
    }
    this.selectedItem=item;
    const logeddata=localStorage.getItem('zomato')
    if(logeddata !=null){
      const data=JSON.parse(logeddata)
      this.orderObj.userId=data.userId
      this.orderObj.totalAmount=this.selectedItem.price
      this.orderObj.restaurantId=this.selectedItem.restaurantID
    }
    
}
   xclick(){
    var getdiv=document.getElementById("popup-div");
    if(getdiv !=null){
      this.quantity="";
      getdiv.style.display="none"
   }
  }

   itemAdded(){
    if(this.quantity!=null){
      alert("Quantity "+this.quantity+" is added for "+this.selectedItem.menuItemName);
      this.placeOrder1(this.orderObj)
   }
   else{
    alert("pls enter quantity of an item 🙏")
   }
  }

  loadFoodItemByCategory(categoryId:any){
    this.master.getFoodItemByCategory(categoryId).subscribe((res:any)=>{
    this.foodCategory=res.data
    console.log(this.foodCategory)
    })


    }

    placeOrder1(obj:any){
      this.master.placeOrder(obj).subscribe((res:any)=>{
        if(res.result){
          alert("Order is placed")
        }

        else{
          alert(res.message)
        }
      })

    }
  }






