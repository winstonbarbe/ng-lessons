import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class PersonsService {
  persons: string[] = ["Me", "Myself", "Irene"]

  addPerson(name: string) {
     this.persons.push(name)
     console.log(this.persons);
  }
}
