import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ITodo } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  create(data: ITodo) {
    let formData = {
      title: data.title,
      description: data.description,
    };
    // make post http request to backend
    return this.http.post('http://localhost:9000/todos/create', formData);
  }

  list() {
    return this.http.get('http://localhost:9000/todos/list');
  }
}
