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
    };
    // make post http request to backend
    return this.http.post('http://localhost:9000/todos/create', formData);
  }

  list() {
    return this.http.get('http://localhost:9000/todos/list');
  }

  translate({ id, language }: { id: string; language: string }) {
    // make post http request to backend
    return this.http.post(`http://localhost:9000/todos/translate/${id}`, {
      language: language,
    });
  }

  delete({ id }: { id: string }) {
    // make delete http request to backend
    return this.http.delete(`http://localhost:9000/todos/delete/${id}`);
  }
}
