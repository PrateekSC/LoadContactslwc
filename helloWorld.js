import { LightningElement, wire, track } from 'lwc';

import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class HelloWorld extends LightningElement {
  @track contactsListByLoad;
  @track error;
  connectedCallback() {
  }

  disconnectedCallback() {
  }

  handleLoadContactClick() {
    getContactList()
        .then(result => {
            this.contactsListByLoad = result;
        })
        .catch(error => {
            this.error = error;
        });
  }
}