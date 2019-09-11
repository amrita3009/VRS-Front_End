import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'attachments',
  templateUrl: './attachments-component.html',
  styles: [
    `
      form {
        max-width: 600px;
      }
    `
  ]
})
export class AttachmentsComponent {
    fileList = [
        {
          uid: 1,
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png'
        },
        {
          uid: 2,
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png'
        },
        {
          uid: 3,
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png'
        }
      ];
}