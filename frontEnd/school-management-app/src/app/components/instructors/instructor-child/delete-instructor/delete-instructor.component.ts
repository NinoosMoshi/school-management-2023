import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-delete-instructor',
  templateUrl: './delete-instructor.component.html',
  styleUrls: ['./delete-instructor.component.css']
})
export class DeleteInstructorComponent implements OnInit {

  @Input() instructorData: any;

  @Output() confirmed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteInstructorConfirm(){
    this.confirmed.emit();
    $('#deleteInstructorModal').modal('hide')
  }


  showDeleteInstructorModal(){
    $('#deleteInstructorModal').modal('show')
  }

}
