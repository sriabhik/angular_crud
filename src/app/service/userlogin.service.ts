import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http : HttpClient) { }

  public loginMethod(userloginData : any){
    console.log("Inside login method");
    
     return this.http.post("http://localhost:9090/users/login",userloginData)
  }


  public createUser(createData: any){
    return this.http.post("http://localhost:9090/customer/create",createData)
  }

  public getAllUser(){
    return this.http.get("http://localhost:9090/customer/getAll");
  }


  public getById(id:any){
    return this.http.get(`http://localhost:9090/customer/getCustomer/${id}`)
  }

  public updateUser(updatedData:any,custId:any){
      return this.http.put(`http://localhost:9090/customer/update/${custId}`,updatedData)
  }

  ///delete api
  public deleteUser(custId:any){
    return this.http.delete(`http://localhost:9090/customer/delete/${custId}`)
  }

}
