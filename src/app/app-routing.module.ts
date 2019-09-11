import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './pages/departments/departments-list/departments-list.component';
import { VendorsVendorListComponent } from './pages/vendors/vendor-list/vendor-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'departments', component: DepartmentsListComponent },
  { path: 'vendors', component: VendorsVendorListComponent, loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
