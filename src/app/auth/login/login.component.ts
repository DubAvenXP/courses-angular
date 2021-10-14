import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  form: any = {
    email: '',
    password: '',
  }

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/home']);
  }
}
