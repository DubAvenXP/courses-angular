import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(this.url, { email, password });
  }
}
