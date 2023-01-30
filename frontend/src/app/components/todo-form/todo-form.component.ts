import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/interfaces';
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
    //receive data from parent component
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  loading = false;

  todoForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  formData: Todo = {
    title: '',
    description: '',
  };

  onSubmit() {
    this.loading = true;

    let data: Todo = {
      title: this.formData.title,
      description: this.formData.description,
    };

    this.todoService.create(data).subscribe((res) => {
      this.loading = false;
      this.todoForm.reset();
    });
  }
}
