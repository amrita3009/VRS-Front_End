import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-vendors-vendor-details-address',
  templateUrl: './vendor-details-address.component.html',
  styleUrls: ['./vendor-details-address.component.scss'],
})
export class VendorsVendorDetailsAddressComponent implements OnInit {
  validateForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null, [Validators.required]],
      agree: [false],
    })
  }
}
