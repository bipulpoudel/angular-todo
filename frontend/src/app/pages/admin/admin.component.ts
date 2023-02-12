import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';
import { AdminService } from 'src/app/services/admin/admin.service';

const ELEMENT_DATA: IUser[] = [
  {
    id: '1',
    firstName: 'Bipul',
    lastName: 'Kumar',
    email: 'bipulpoudeldev@gmail.com',
    role: 'user',
  },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private adminService: AdminService, private router: Router) {}

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
  dataSource = new MatTableDataSource<IUser>([]);

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getUsers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<IUser>(response?.data?.users);
    });
  }

  onRowClicked(row: IUser) {
    this.router.navigate([`/admin/${row.id}`]);
  }
}
