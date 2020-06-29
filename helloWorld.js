import { LightningElement, wire, track } from 'lwc';

import getContactList from '@salesforce/apex/ContactController.getContactList';

const DELAY = 300;


export default class HelloWorld extends LightningElement {
  @track contactsListByLoad;
  @track error;

  greeting = 'Hello World!';

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  greetingChangeHandler(event) {
    this.greeting = event.target.value;
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