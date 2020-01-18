import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { KIDialogDirective } from './ki-dialog.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KIDialogDirective,
    
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [KIDialogDirective]

})

export class KIDialogDirectiveModule { }