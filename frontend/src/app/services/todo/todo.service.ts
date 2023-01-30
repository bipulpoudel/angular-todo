import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  create(data: Todo) {
    let formData = {
      title: data.title,
      description: data.description,
    };
    // make post http request to backend
    return this.http.post('http://localhost:9000/todos/create', formData);
  }

  async list() {
    // make get http request to backend

    let response = await this.http.get('http://localhost:9000/todos/list');
    console.log(response);
  }
}
