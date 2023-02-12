import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ITodo } from 'src/app/interfaces';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  apiURL = API_URL + '/todos';

  create(data: ITodo) {
    let formData = {
      title: data.title,
    };
    // make post http request to backend
    return this.http.post(this.apiURL + '/create', formData);
  }

  list() {
    return this.http.get(this.apiURL + '/list');
  }

  translate({ id, language }: { id: string; language: string }) {
    // make post http request to backend
    return this.http.post(this.apiURL + `/translate/${id}`, {
      language: language,
    });
  }

  delete({ id }: { id: string }) {
    // make delete http request to backend
    return this.http.delete(this.apiURL + `/delete/${id}`);
  }
}
