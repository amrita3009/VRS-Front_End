import { NgModule } from '@angular/core'
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule} from '@angular/common';
import { VendorsRouterModule } from './vendors-routing.module'

import { VendorsVendorListComponent } from './vendor-list/vendor-list.component'
import { VendorsVendorAddComponent } from './vendor-add/vendor-add.component'
import { VendorsVendorDetailsAddressComponent } from './vendor-details/vendor-details-address/vendor-details-address.component'
import { VendorsVendorDetailsHeaderComponent } from './vendor-details/vendor-details-header/vendor-details-header.component'
import { VendorsVendorDetailsComponent } from './vendor-details/vendor-details.component'
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { BankingDetailsComponent } from './components/banking-details/banking-details.component';
import { GstDetailsComponent } from './components/gst-details/gst-details.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { DeclarationComponent } from './components/declaration/declaration-component';
const COMPONENTS = [
  VendorsVendorListComponent,
  VendorsVendorAddComponent,
  VendorsVendorDetailsAddressComponent,
  VendorsVendorDetailsHeaderComponent,
  VendorsVendorDetailsComponent,
  PersonalDetailsComponent,
  AddressDetailsComponent,
  BankingDetailsComponent,
  GstDetailsComponent,
  AttachmentsComponent,
  DeclarationComponent,
]

@NgModule({
  imports: [
    VendorsRouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [VendorsVendorListComponent]
})
export class VendorsModule {}
