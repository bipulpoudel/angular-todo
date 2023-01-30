import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TodoFormComponent } from 'src/app/components/todo-form/todo-form.component';

import ITodo from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  todoList: ITodo[] = [];

  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  ngOnInit() {
    let response = this.todoService.list();
    console.log(response);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(TodoFormComponent, {
      disableClose: true,
      autoFocus: true,
      id: 'todo-form',
      data: {
        closeDialog: this.closeDialog.bind(this),
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog() {
    this.dialog.getDialogById('todo-form')?.close();
  }
}
