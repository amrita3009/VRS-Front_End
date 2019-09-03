import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from '../departments/departments-list/departments-list.component';

const routes: Routes = [
  {
    path: '/departments',
    component: DepartmentsListComponent,
    data: { title: 'Ecommerce Products List' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
