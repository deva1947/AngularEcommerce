// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.css']
// // })
// // export class LoginComponent {

// // }

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { LoginService } from '../Services/Login/login.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username!: string;
//   password!: string;

//   constructor(private loginService: LoginService, private router: Router) { }
//   // constructor(private authService: AuthService, private router: Router) { }

//   onUsernameInput(event: Event): void {
//     this.username = (event.target as HTMLInputElement).value;
//   }
//   login(): void {
//     const isAuthenticated = this.loginService.authenticate(this.username, this.password);
//     if (isAuthenticated) {
//       // Redirect or show success message
//        this.router.navigate(['\home']);
//      // /D:\angularpractice\student\src\app\pages\home
//       //console.log('Login successful');
//     } else {
//       // Show error message
//       console.log('Login failed');
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { LoginService } from '../Services/Login/login.service';

// @Component({
//   selector: 'app-login-form',
//   template: `
//     <form (ngSubmit)="authenticate()">
//       <input type="text" name="username" [(ngModel)]="username" placeholder="Username" required>
//       <div *ngIf="usernameInvalid" class="error-message">Username is invalid</div>

//       <input type="password" name="password" [(ngModel)]="password" placeholder="Password" required>
//       <div *ngIf="passwordInvalid" class="error-message">Password is invalid</div>
//       <div *ngIf="invaliduser" class="error-message">invalid data</div>
//       <div *ngIf="validuser" class="error-message">correct login credentials</div>
//       <button type="submit">Login</button>
//     </form>
//   `,
// })
// export class LoginComponent {
//   username!: string;
//   password!: string;
//   message:string="inavlid user name and password";
//   usernameInvalid!: boolean;
//   passwordInvalid!: boolean;
//   validuser!: boolean;
//   invaliduser!: any;
//   validateForm() {
//     this.usernameInvalid = !this.validateUsername(this.username);
//     this.passwordInvalid = !this.validatePassword(this.password);
//     this.validuser=!this.authenticate();
//     this.invaliduser=this.authenticate();
//   }

//   validateUsername(username: string): boolean {
//     // Implement your custom username validation logic
//     // Return true if valid, false otherwise

//     // Example: The username must be at least 5 characters long
//     return username.length >= 5;
//   }

//   validatePassword(password: string): boolean {
//     // Implement your custom password validation logic
//     // Return true if valid, false otherwise
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//     // Example: The password must be at least 8 characters long
//     //return password.length >= 8;

//   }
//   //login()
//   authenticate()
//   {
//     this.validateForm();

//     if (!this.usernameInvalid && !this.passwordInvalid) {
//       // Perform login logic here
//       //[this.message]

//       return true;
//     }
//     else{
//       //this.router.navigate(['/menu']);
//       return false;
//     }
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username: any;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    const loginData = { username, password };

    this.http.post<any>('your-login-api-url', loginData).subscribe(
      (response) => {
        // Successful login, save the JWT token
        const token = response.token;
        localStorage.setItem('token', token);
      },
      (error) => {
        // Handle login error
        console.error(error);
      }
    );
  }
}

