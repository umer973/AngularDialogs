/*-----------------------------------------------------------------------
        <Copyright file='KISpinner Show' Company=Kameda Infologics'> 
        Copyright@Kameda Infologics Pvt Ltd. All rights reserved. 
        </Copyright> 
        Description     :'dialog service' 
        Created  By     :'A Jay Singh' 
        Created  Date   :'08/07/2019' 
        Modified By     :'' 
        Modified Date   :'' 
        Modified Purpose:'' 
       -----------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { KIDialogDirective } from './ki-dialog.directive';
import { TranslateService } from '@ngx-translate/core';
import { DialogType } from '../../../../../src/app/globals/enumerators';

@Injectable()
export class KIDialogService {
    Message: string = "";
    ValidationMessageType: string = "";
    time: number = 1200;
    loadingFlag: Boolean = false;
    autoDialogModal: KIDialogDirective;
    dialogModal: KIDialogDirective;
    dialogActions: any = {
        0: 'Error',
        1: 'Information',
        2: 'Block',
        3: 'Warning',
        4: 'Confirmation',
        5: 'Confirm',
        6: 'Success'
       }

    constructor(private translate: TranslateService, ) {
    }


    public setAutoDialogModal(autoDialogModal) {
        this.autoDialogModal = autoDialogModal;
    }

    public setDialogModal(dialogModal) {
        this.dialogModal = dialogModal;
    }

    public getTitle() {
        return this.ValidationMessageType;
    }

    public setTitle(ValidationMessageType) {
        this.ValidationMessageType = ValidationMessageType;
    }

    public getMessage() {
        return this.Message;
    }

    public setMessage(Message: string) {
        //#region custum Message
        if (Message.includes('¥')) {
            var rex = /[a-zA-Z0-9.]+(?=\¥)/g;
            var matches = Message.match(rex);
            for (var i = 0; i < matches.length; i++) {
                const strkey = "¥" + matches[i] + "¥";
                var trantemp = this.translate.instant((matches[i]));
                Message = Message.replace(strkey, trantemp);
            }
            this.Message = Message;
        }
        else {
            this.Message = Message;
        }

    }

    public getLoadingFlag() {
        return this.loadingFlag;
    }

    public setLoadingFlag(flag: Boolean) {
        setTimeout(() => {
            this.loadingFlag = flag

        }, 0);
    }

    public onSpinnerShow() {
        this.setLoadingFlag(true);
    }

    public onSpinnerShowAutoHide() {
        this.setLoadingFlag(true);
        setTimeout(() => { this.setLoadingFlag(false) }, 10000)
    }

    public onSpinnerHide() {
        this.setLoadingFlag(false);
    }

    public onMessageAuto({ ValidationMessageType, Message, StatusCode }: { ValidationMessageType?: number; Message?: string; StatusCode?: number; } = {}, time?: number) {
        this.configModal(ValidationMessageType, Message, StatusCode);
        this.autoDialogModal.show();
        setTimeout(() => {
            this.autoDialogModal.hide();
        }, typeof time == 'undefined' ? this.time : time);
    }

    onMessageShow({ ValidationMessageType, Message, StatusCode }: { ValidationMessageType?: number; Message?: string; StatusCode?: number; } = {}) {
        this.configModal(ValidationMessageType, Message, StatusCode);
        this.autoDialogModal.show();
    }
    public onMessageShowWithClose({ ValidationMessageType, Message, StatusCode }: { ValidationMessageType?: number; Message?: string; StatusCode?: number; } = {}) {
        this.configModal(ValidationMessageType, Message, StatusCode);
        this.dialogModal.show();
    }
    private configModal(ValidationMessageType: number, Message: string, StatusCode: number) {
        if (typeof ValidationMessageType == 'undefined' && typeof Message == 'undefined') {
            // debugger;
            const messageer = this.translate.instant('dialogComponent.Error');
            this.setMessage(messageer);
            this.setTitle(StatusCode == 200 ? DialogType.Success : DialogType.Error);
        }
        else {
            if (typeof ValidationMessageType == 'undefined') {
                this.setMessage(Message);
                this.setTitle(StatusCode == 200 ? DialogType.Success :DialogType.Blocking);
            }
            else if (typeof Message == 'undefined') {
                var ititle = this.dialogActions[ValidationMessageType];
                const messageer = this.translate.instant('dialogComponent.' + ititle);
                this.setMessage(messageer);
                this.setTitle(StatusCode == 200 ? DialogType.Success :ValidationMessageType);
            }
            else {
                this.setMessage(Message);
                this.setTitle(StatusCode == 200 ? DialogType.Success :ValidationMessageType);
            }
        }
    }

    public onMessageHide() {
        this.setMessage("");
        this.setTitle("");
        this.autoDialogModal.hide();
    }
    public onMessageClose() {
        this.setMessage("");
        this.setTitle("");
        this.dialogModal.hide();
    }




}
