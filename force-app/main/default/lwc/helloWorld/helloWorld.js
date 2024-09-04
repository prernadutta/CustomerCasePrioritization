import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
  
    showTAndC = false;

    handleTAndCChange(event) {
        this.showTAndC = event.target.checked;
    }
}
