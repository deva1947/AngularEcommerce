import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //canActivate(): boolean
  authenticate(username: string, password: string): boolean {
    // Replace with your authentication logic
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      return true;
    }
    else {
      //this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return false;
    // Authentication failed
    //return false;
  }
}
}
