import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { KIDialogDirective } from './ki-dialog.directive';


@Component({
    selector: 'ki-dialog-confirm',
    templateUrl: './ki-dialog.confirm.component.html',
    styles: ['./ki-dialog.confirm.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class KIDialogConfirmComponent implements OnInit {

    @ViewChild('dialogWindow',{static : false}) public dialogWindow: KIDialogDirective;

    @Input() message = "test message";
    @Input() set showDialog(showDialog: boolean){
        if (showDialog == true){
            this.dialogWindow.show();
        }
    }
    @Input() ok = "Yes";
    @Input() close = "No";
   
    @Output() confirmStatus = new EventEmitter();
    // @Output() cancel = new EventEmitter();

    constructor() {
    } 

    ngOnInit() {
    }

    onConfirmClicked() {
        this.confirmStatus.emit({status:true});
        this.dialogWindow.hide();
    }

    onCancelClicked() {
        // this.cancel.emit(null);
        this.confirmStatus.emit({status:false});
        this.dialogWindow.hide();
    }
    
}
