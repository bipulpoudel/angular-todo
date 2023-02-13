import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import ITodo from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  todoList: ITodo[] = [];
  loading = false;
  language = 'fr';
  errorMessage = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllTodos();
    this.errorMessage = this.route.snapshot.paramMap.get('message') || '';
  }

  getAllTodos() {
    this.loading = true;
    this.todoService.list().subscribe((response: any) => {
      this.todoList = response?.data?.todos;
      this.loading = false;
    });
  }

  refreshTodos(event: any) {
    this.getAllTodos();
  }
}
