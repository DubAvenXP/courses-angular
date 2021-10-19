import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
