import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userlogin.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userData = {
    custName:'',
    mobileNumber:'',
    email:'',
    password:''
  }

  constructor(private userService : UserloginService,private route : Router){}
  formSubmit(){

    this.userService.createUser(this.userData).subscribe((data:any)=>{
      console.log(data);
      
    })
    this.route.navigateByUrl("")
  }
  login(){
      this.route.navigateByUrl("")
  }

}
