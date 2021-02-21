import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit {
  personsList: string[];
  constructor(private prsService: PersonsService) {
    // this.personsList= prsService.persons;
  }
  ngOnInit() {
    this.personsList = this.prsService.persons;
  }
  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
