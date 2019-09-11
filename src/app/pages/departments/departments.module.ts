import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule} from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';

import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';


@NgModule({
  imports: [NzTableModule, CommonModule, DepartmentsRoutingModule],
  //entryComponents: [AddEditDepartmentComponent],
  declarations: [DepartmentsListComponent],
  exports: [DepartmentsListComponent]
})
export class DepartmentsModule { }
