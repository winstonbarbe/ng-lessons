import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsInputComponent } from './persons/persons-input.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonsInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
