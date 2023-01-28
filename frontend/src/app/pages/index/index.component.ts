import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TodoFormComponent } from 'src/app/components/todo-form/todo-form.component';

import ITodo from 'src/app/interfaces/ITodo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  todoList: ITodo[] = [];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(TodoFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
