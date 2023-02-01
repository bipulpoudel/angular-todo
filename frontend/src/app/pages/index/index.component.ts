import { Component } from '@angular/core';

import ITodo from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  todoList: ITodo[] = [];
  remainingTodos: ITodo[] = [];
  completedTodos: ITodo[] = [];
  selectedTodo: ITodo | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getAllTodos();
  }

  onSelectedTodo(todo: ITodo | null) {
    this.selectedTodo = todo;
  }

  ngDoCheck() {
    this.remainingTodos = this.todoList.filter(
      (todo) => todo?.completed === false
    );
    this.completedTodos = this.todoList.filter(
      (todo) => todo?.completed === true
    );
  }

  getAllTodos() {
    this.todoService.list().subscribe((response: any) => {
      this.todoList = response?.data?.todos;
    });
  }
}
