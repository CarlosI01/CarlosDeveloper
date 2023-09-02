import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  
  deleteHero?: String;

  comprobar?:string;

  heros:string[]=['Spider Man', 'Capitan America', 'Ant man', 'Deadpool'];
  removeHero(): void{
   this.deleteHero = this.heros.pop();
  }

}
