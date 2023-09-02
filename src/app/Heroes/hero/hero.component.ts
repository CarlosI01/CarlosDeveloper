import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = 'Spider Man';
  age: number = 34;
  get CapitalizedName():string{
    return 'HOLA MUNDO'.toLocaleLowerCase();
  }
  getHero():string{
    return `${this.name } - ${this.age}`;
  }
  UpdateHero(){
    this.name='Capitan America';
  }
  UpdateAge(){
    this.age=100;
  }
  ChangeReset(){
    this.name='Spider Man';

    this.age=34;

    // document.querySelector('h1')!.innerHTML="<h1>Hola Mundo</h1>"
    document.querySelectorAll('h1')!.forEach(response=>{
      response.innerHTML='<h1>Hola Javi </h1>';
    });
  }


}
