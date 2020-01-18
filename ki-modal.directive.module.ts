import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { KIModalDirective } from './ki-modal.directive';



@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    KIModalDirective,
    
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [KIModalDirective]

})

export class KIModalDirectiveModule { }