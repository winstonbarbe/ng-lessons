import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personsList: string[];
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {}

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personsList = persons;
    });
    this.prsService.fetchPersons();
  }
  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy () {
    this.personListSubs.unsubscribe();
  }
}
