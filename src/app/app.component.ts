import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons = ["Me", "Myself", "Irene"]

  onPersonCreated(name: string) {
     this.persons.push(name)
  }
}
