import { Component, Input } from '@angular/core';
import Todo from 'src/app/interfaces/ITodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo | null = null;

  isCompleted = false;

  ngOnInit() {
    if (this.todo) {
      this.isCompleted = this.todo?.completed ? true : false;
    }
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
