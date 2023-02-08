import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ITodo } from 'src/app/interfaces';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  formData = {
    title: '',
    description: '',
  };

  loading = false;

  todoForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  addTodo() {
    this.loading = true;

    let data: ITodo = {
      title: this.formData?.title || '',
      description: this.formData?.description,
    };

    this.todoService.create(data).subscribe((res) => {
      this.loading = false;
      this.todoForm.reset();
    });
  }

  updateTodo() {
    this.loading = true;
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.addTodo();
    }
  }
}
