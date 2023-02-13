import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiURL = environment.apiUrl + '/auth';

  login(data: any) {
    let formData = {
      email: data.email,
      password: data.password,
    };
    // make post http request to backend
    return this.http.post(this.apiURL + '/login', formData);
  }

  register(data: any) {
    let formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      type: data.type,
    };
    // make post http request to backend
    return this.http.post(this.apiURL + '/register', formData);
  }
}
