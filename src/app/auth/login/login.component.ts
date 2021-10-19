import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  form: any = {
    email: '',
    password: '',
  };
  loginError: boolean = false;
  user: any = {};

  constructor(private router: Router, private authService: AuthService) {}

  submit() {
    this.authService.login(this.form.email, this.form.password).subscribe(
      (data) => {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(this.user.user));
        localStorage.setItem('token', this.user.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loginError = true;
      }
    );
  }
}
