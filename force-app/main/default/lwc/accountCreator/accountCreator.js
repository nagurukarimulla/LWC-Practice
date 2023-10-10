import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountCreator extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    websiteField = WEBSITE_FIELD;

    handleAccountCreated(event) {

        const accountId = event.detail.id;

        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Account created with ID: ' + accountId,
            variant: 'success',
        });
        this.dispatchEvent(toastEvent);

        
}
}