import { Component } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ["./persons-input.component.css"]
})

export class PersonsInputComponent {
  onCreatePerson() {
    console.log("I am god creating man")
  }
}
