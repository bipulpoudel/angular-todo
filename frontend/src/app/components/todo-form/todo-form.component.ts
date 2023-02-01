import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/interfaces';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Input() selectedData: Todo | null = {
    title: '',
    description: '',
  };

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  formData = {
    title: '',
    description: '',
  };

  ngOnChanges() {
    if (this.selectedData) {
      this.formData = {
        title: this.selectedData?.title || '',
        description: this.selectedData?.description || '',
      };
    }
  }

  loading = false;

  todoForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  addTodo() {
    this.loading = true;

    let data: Todo = {
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
    if (this.selectedData) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  }
}
