import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http:HttpClient) {}


  getAllFoodCategory(): Observable<any> {
    return this.http.get("/api/zomato/GetAllFoodCategory")
  }

  getFoodItemByCategory(categoryId:any):Observable<any> {
    return this.http.get("/api/zomato/GetFoodItemByCategory?categoryId="+categoryId)

  }

  login(obj:any):Observable<any> {
    return this.http.post<any>("/api/zomato/Login",obj)

  }

  placeOrder(obj:any):Observable<any>{
     return this.http.post("/api/zomato/AddNewOrder",obj)
  }

  
  
}