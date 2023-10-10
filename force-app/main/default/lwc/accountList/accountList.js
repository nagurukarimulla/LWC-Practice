import { LightningElement, wire, track } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountFetchController.fetchAccounts';
import { NavigationMixin } from 'lightning/navigation';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class AccountList extends NavigationMixin(LightningElement) {
    accounts;

    @wire(fetchAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            console.log('fetched accounts are :', this.accounts)
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    @track isAccountCreatorVisible = false;

    handleCreate() {
        // Set the flag to true when the "Create" button is clicked
        this.isAccountCreatorVisible = true;
    }

    handleEdit(event) {
        // Implement logic to edit the selected Account
        const accountId = event.target.dataset.recordid;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: accountId,
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }

    async handleDelete(event) {
        // Implement logic to delete the selected Account
        const accountId = event.target.dataset.recordid;
        try {
            await deleteRecord(accountId);
            // Optionally, refresh the list of accounts after deletion
            // You can add logic to do this based on your requirements
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    }
}
