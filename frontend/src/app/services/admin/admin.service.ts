import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  apiURL = environment.apiUrl + '/admin';

  getUsers() {
    return this.http.get(this.apiURL + '/users');
  }

  getAnalytics(id: string) {
    return this.http.get(this.apiURL + '/users/' + id);
  }
}
