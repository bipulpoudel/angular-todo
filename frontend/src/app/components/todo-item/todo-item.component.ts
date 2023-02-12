import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['todo-item.component.scss'],
})
export class TodoItemComponent {
  constructor(private todoService: TodoService) {}

  @Input() todo: Todo | null = null;
  @Input() language: string = 'es';

  @Output() refreshTodos = new EventEmitter();

  loading = '';
  translation = '';

  ngOnInit() {
    if (this.todo) {
      this.translation = this.todo?.title;
    }
  }

  translate() {
    this.loading = 'translate';

    if (!this.todo?.id) return console.log('No todo id found');

    this.todoService
      .translate({
        id: this.todo?.id,
        language: this.language,
      })
      .subscribe({
        next: (res: any) => {
          const { data } = res;
          this.translation = data.translation || '';
          this.loading = '';
        },
        error: (err: any) => {
          console.log(err);
          this.loading = '';
        },
      });
  }

  delete() {
    this.loading = 'delete';

    if (!this.todo?.id) return console.log('No todo id found');

    this.todoService.delete({ id: this.todo?.id }).subscribe({
      next: (res: any) => {
        this.loading = '';
        this.refreshTodos.emit();
      },
      error: (err: any) => {
        console.log(err);
        this.loading = '';
      },
    });
  }
}
