import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() data:any;

  @Output() confirmed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }



  showDeleteModal(){
    $('#deleteModal').modal('show');
  }


  deleteCourseConfirm(){
    this.confirmed.emit();
    $('#deleteModal').modal('hide');
  }




}
