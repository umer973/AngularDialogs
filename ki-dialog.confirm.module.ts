import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { KIDialogConfirmComponent } from "./ki-dialog.confirm.component";
import { KIDialogDirectiveModule } from './ki-dialog.directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KIDialogDirectiveModule,
    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactoryUser, deps: [HttpClient] } }),
  ],
  declarations: [KIDialogConfirmComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [KIDialogConfirmComponent]

})

export class KIDialogConfirmModule { }
// required for AOT compilation
export function HttpLoaderFactoryUser(http: HttpClient) {
  return new TranslateHttpLoader(http);
}