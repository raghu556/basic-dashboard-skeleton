import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NgbAccordionModule,NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAccordionModule,
    NgbTabsetModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    FormsModule
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule { }
