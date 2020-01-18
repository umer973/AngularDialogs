import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { KIDialogService } from './ki-dialog.service';
import { KIDialogDirective } from './ki-dialog.directive';



@Component({
  selector: 'ki-dialog',
  templateUrl: './ki-dialog.component.html',
  styleUrls: ['./ki-dialog.component.scss']
})


export class KIDialogComponent implements OnInit, AfterViewInit {
  dialogComponentService: KIDialogService;
  dialogClass: any = {
    0: 'Error',
    1: 'Information',
    2: 'Block',
    3: 'Warning',
    4: 'Confirmation',
    5: 'Confirm',
    6: 'Success'
   }
  @ViewChild('autoDialogModal', { static: false }) public autoDialogModal: KIDialogDirective;
  @ViewChild('dialogModal', { static: false }) public dialogModal: KIDialogDirective;
  // @ViewChild('autoDialogModal') public autoDialogModal: KIDialogDirective;
  // @ViewChild('dialogModal') public dialogModal: KIDialogDirective;
  constructor(private dialogService: KIDialogService) {
    
    this.dialogComponentService = this.dialogService;
  }
  ngOnInit() {
 
  }
  ngAfterViewInit() {
    this.dialogService.setAutoDialogModal(this.autoDialogModal);
    this.dialogService.setDialogModal(this.dialogModal);
  }
  getTitle() {
    return this.dialogComponentService.getTitle();
  }
}
