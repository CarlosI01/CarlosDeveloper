import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter.component';



@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CommonModule, CounterComponent
  ]
})
export class CounterModule { }
