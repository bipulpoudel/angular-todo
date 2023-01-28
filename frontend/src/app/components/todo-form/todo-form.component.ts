import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  constructor(private fb: FormBuilder) {}

  todoForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  onSubmit() {
    console.log(this.todoForm.value);
  }
}
