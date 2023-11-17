import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class UrlGuard {
  constructor(private login :UserloginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isLoggedIn() ){
        console.log("inside loggin ");
        
        return true;
      }
      //if condition false then send to lgin page
      this.router.navigateByUrl('')
      return false;
  
  }
  
}
