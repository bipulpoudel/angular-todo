import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITodo } from 'src/app/interfaces';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) {}

  loading = false;
  formData = {
    title: '',
  };

  todoForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
  });

  addTodo() {
    this.loading = true;

    let data: ITodo = {
      title: this.formData?.title || '',
    };

    this.todoService.create(data).subscribe((res) => {
      this.loading = false;
      this.todoForm.reset();
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.addTodo();
    }
  }
}
