import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details-component.html',
  styles: [
    `
      form {
        max-width: 600px;
      }
    `
  ]
})
export class PersonalDetailsComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      datePicker: [null],
      datePickerTime: [null],
      monthPicker: [null],
      rangePicker: [[]],
      rangePickerTime: [[]],
      timePicker: [null]
    });
  }
}