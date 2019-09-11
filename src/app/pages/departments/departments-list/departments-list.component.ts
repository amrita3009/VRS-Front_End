import { Component, OnInit } from '@angular/core';

import { Department } from '../../../services/departments/department';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ecommerce-products-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
})
export class DepartmentsListComponent implements OnInit {

  departments: Department[];
  isVisible = false;

  departments$: Observable<Department[]>;

  constructor(private departmentService: DepartmentsService) { }

  ngOnInit() {
    this.departments$ = this.departmentService.getDepartments();
  }
  showModal(): void {
    console.log("122222222",this)
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

