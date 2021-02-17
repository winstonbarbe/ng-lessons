import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsInputComponent } from './persons/persons-input.component';
import { PersonsComponent } from './persons/persons.component'

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonsInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
