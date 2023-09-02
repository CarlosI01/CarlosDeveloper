import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  hero="Mundo Marvel"
  title="Contador"
  numero=0;
  Contador(value: number){
    this.numero+=value;
  }
  Resetear(){
    this.numero = 0;
  }
}
