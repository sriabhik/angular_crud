import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userlogin.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements  OnInit{

  registeredStudent:any

  name="Abhishek"
  constructor(private userLogin : UserloginService,private routes:Router){}
  ngOnInit(): void {

      this.userLogin.getAllUser().subscribe((data)=>{
        this.registeredStudent=data
        console.log(data);
        
      }) 
  }


  updateUser(id:any){
      this.routes.navigateByUrl(`/update/${id}`)
  }

  deleteUser(id:any){
    this.userLogin.deleteUser(id).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}
