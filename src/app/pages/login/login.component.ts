import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //dataType

  userData = {
    email:'',
    password:''
  }
  constructor(private loginService : UserloginService,private router : Router){}
  //logic



  formSubmit(){
    ///dataa backend 
    console.log("Inside method");
    
    this.loginService.loginMethod(this.userData).subscribe((data:any)=>{
      console.log("data : "+data);

      if(data.userRole == customer){
          this.router.navigateByUrl("/customer_Dasboard")
      }
      else{
        this.loginService.loginUser(data.jwtToken);
        console.log(data.jwtToken);
        this.router.navigateByUrl('/welcome')
      }

        // this.loginService.getCurrentUser().subscribe((user:any)=>{
        //   console.log("get Current " + this.loginService.getToken());
          
        //   console.log(user)
        //   this.loginService.setUser(user); 
          
      // })
       
    })
  }
    signup(){
      this.router.navigateByUrl('/create')
    }
}
