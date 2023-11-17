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


  public getById(custId:any){
    return this.http.get(`http://localhost:9090/customer/getCustomer/${custId}`)
  }

  public updateUser(updatedData:any,custId:any){
      return this.http.put(`http://localhost:9090/customer/update/${custId}`,updatedData)
  }

  ///delete api
  public deleteUser(custId:any){
    return this.http.delete(`http://localhost:9090/customer/delete/${custId}`)
  }
  public getCurrentUser(){
    return this.http.get(`http://localhost:9090/users/current-user`);
  }

  
   //login user:set token user
   public loginUser(token: any){
    // in this way we store token from retun value from backend
    localStorage.setItem('token',token);
    return true ;
  }

  //isLogin:user is login or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')
    if(tokenStr==undefined||tokenStr==''|| tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //logout:remove token from local stroage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  //get token
  public getToken(){
    return localStorage.getItem('token');
}
//set UserDetail
//json to string
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user))
}
//get User
public getUser(){
  let userStr = localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr)
  }else{
    this.logout();
    return null;
  }
}

}
