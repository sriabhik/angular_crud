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

  
  constructor(private userLogin : UserloginService,private routes:Router){}
  ngOnInit(): void {

      this.userLogin.getAllUser().subscribe((data)=>{
       
        this.registeredStudent=data
        console.log(data);
        
      }) 
  }


  updateUser(custId:any){
      this.routes.navigateByUrl(`/update/${custId}`)
  }

  deleteUser(id:any){
    this.userLogin.deleteUser(id).subscribe(()=>{
      this.registeredStudent = this.registeredStudent.filter((hero: { custId: any; }) => hero.custId !== id);
      // this.registeredStudent.splice(this.registeredStudent.findIndex(h => h.id === id));
      
      
    })
  }
  logout(){
    this.userLogin.logout()
    this.routes.navigateByUrl('/')
  }
}
