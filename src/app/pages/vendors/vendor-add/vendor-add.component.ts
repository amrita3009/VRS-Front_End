import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-steps-step-next',
  templateUrl: './vendor-add.component.html',
  styles: [
    `
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `
  ]
})
export class VendorsVendorAddComponent {
  current = 0;

  index = 'personal-details';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'personal-details';
        break;
      }
      case 1: {
        this.index = 'address-details';
        break;
      }
      case 2: {
        this.index = 'banking-details';
        break;
      }
      case 3: {
        this.index = 'gst-details';
        break;
      }
      case 4: {
        this.index = 'attachments';
        break;
      }
      case 5: {
        this.index = 'declaration';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {}
}