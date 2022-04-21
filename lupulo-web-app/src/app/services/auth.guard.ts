import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router'
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate{
    isAuth = false;
    
    constructor(private userService: UserService, private router: Router ){}

    canActivate(){
        if (this.userService.Auth().subscribe(authStatus => {
            this.isAuth != authStatus;
          })){
            return true;
        }
        else{
            return this.router.navigate(['/login'])
        }

    }
}