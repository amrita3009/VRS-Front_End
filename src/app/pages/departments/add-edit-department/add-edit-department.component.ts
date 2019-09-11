import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DepartmentsService } from '../../../services/departments/departments.service';

@Component({
  selector: 'add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss'],
})
export class AddEditDepartmentComponent {
  public isVisible = false;

  // @Input() open: boolean = false;
  // @Output() openChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  public get openModal() {
    return this.isVisible;
  }
  @Output() openModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public set openModal(value: boolean) {
    this.isVisible = value;
    this.openModalChange.emit(value);
  }


  constructor(private departmentService: DepartmentsService) { }

  showModal(): void {
    console.log("111111111",this)
    this.isVisible = true;
    this.openModalChange.emit(true);
  }

  handleOk(value): void {
    console.log('Button ok clicked!',value);
    this.isVisible = false;
    this.openModalChange.emit(false);
    this.departmentService.addDepartment(value);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.openModalChange.emit(false);
  }
}
