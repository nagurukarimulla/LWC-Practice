import { LightningElement, track } from 'lwc';
import startRequest from '@salesforce/apex/ContinuationController.startRequest';

export default class ContinuationComponent extends LightningElement {
    @track statusBool = false;
    @track result = '';

    async startRequest() {
        this.statusBool = true;
        try {
            const response = await startRequest();
            this.result = response;
        } catch (error) {
            console.error(error);
        } finally {
            this.statusBool = false;
        }
    }
}
