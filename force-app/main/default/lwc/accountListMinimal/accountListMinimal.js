import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getAccounts from '@salesforce/apex/AccountController1.getMinimalAccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
];

export default class AccountListMinimal extends LightningElement {
    accounts = [];
    columns = COLUMNS;

    // Wire method to fetch minimal account data
    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    // Handle refresh action
    handleRefresh() {
        // Use refreshApex to refresh the data
        refreshApex(this.wiredAccounts);
    }
}
