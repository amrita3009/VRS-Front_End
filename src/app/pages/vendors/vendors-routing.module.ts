import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VendorsVendorListComponent } from 'src/app/pages/vendors/vendor-list/vendor-list.component'
import { VendorsVendorAddComponent } from 'src/app/pages/vendors/vendor-add/vendor-add.component'
import { VendorsVendorDetailsComponent } from './vendor-details/vendor-details.component'

const routes: Routes = [
  {
    path: 'vendor-list',
    component: VendorsVendorListComponent,
    data: { title: 'Vendor List' },
  },
  {
    path: 'vendor-add',
    component: VendorsVendorAddComponent,
    data: { title: 'Add Vendor' },
  },
  {
    path: 'vendor-details',
    component: VendorsVendorDetailsComponent,
    data: { title: 'Vendor Details' },
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRouterModule {}
