import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule} from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';

import { DepartmentsListComponent } from './departments-list/departments-list.component';


@NgModule({
  imports: [NzTableModule, CommonModule, DepartmentsRoutingModule],
  declarations: [DepartmentsListComponent],
  exports: [DepartmentsListComponent]
})
export class DepartmentsModule { }
