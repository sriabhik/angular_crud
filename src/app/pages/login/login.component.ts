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

        this.router.navigateByUrl('/welcome')
    })
  }
    signup(){
      this.router.navigateByUrl('/create')
    }
}
