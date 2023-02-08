import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    let formData = {
      email: data.email,
      password: data.password,
    };
    // make post http request to backend
    return this.http.post('http://localhost:9000/auth/login', formData);
  }

  register(data: any) {
    let formData = {
      email: data.email,
      password: data.password,
    };
    // make post http request to backend
    return this.http.post('http://localhost:9000/auth/register', formData);
  }
}
