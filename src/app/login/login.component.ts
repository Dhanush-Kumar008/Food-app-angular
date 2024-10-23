import { Component } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private master:FoodServiceService,private router:Router){

  }

  loginData:any=
    {
      "userName": "",
      "password": ""
    }
  
  login1(){
    this.master.login(this.loginData).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('zomato',JSON.stringify(res.Data))
        this.router.navigate(['/foodcategory'])
      }

      else{
        alert(
        res.message
        )
      }
    })

  }
}
