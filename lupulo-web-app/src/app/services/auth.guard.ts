import { Injectable } from "@angular/core";
import { CanLoad, CanActivate, Router } from '@angular/router'
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate{
    isAuth = false;
    
    constructor(private userService: UserService, private router: Router ){}

    canActivate(){
    if(this.userService.Auth() == true){
        return true;
    }
    else{
    return this.router.navigate(['/login'])
    } 
    }     
}