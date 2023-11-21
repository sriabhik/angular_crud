import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userlogin.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
}) 
export class UpdateStudentComponent implements OnInit{

  userData = {
    custName:'',
    mobileNumber:'',
    email:'',
    password:''
  }

  constructor(private routes:Router,
              private userService: UserloginService,
              private _route:ActivatedRoute,
              private route : Router){}

  dataUser:any
  id:any
  ngOnInit(): void {

        this.id =this._route.snapshot.params['custId']
        console.log(this.id);
        
        this.userService.getById(this.id).subscribe((data)=>{
          this.dataUser=data
          console.log(data);
          this.userData.custName=this.dataUser.custName
          this.userData.email=this.dataUser.email
          this.userData.mobileNumber=this.dataUser.mobileNumber
          this.userData.password= this.dataUser.password
          
        })

    
        
  }

  formSubmit(){
        this.userService.updateUser(this.userData,this.id).subscribe((data:any)=>{
          console.log(data);
          this.route.navigateByUrl('/welcome')
          
        })
      
  }

  back(){
        this.routes.navigateByUrl('welcome')
  }

}
