import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DepartmentsListComponent } from './pages/departments/departments-list/departments-list.component';
import { VendorsModule } from './pages/vendors/vendors.module';
import { AddEditDepartmentComponent } from './pages/departments/add-edit-department/add-edit-department.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    AddEditDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
