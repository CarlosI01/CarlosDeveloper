import { Component, EventEmitter, Input , Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuuid} from 'uuid';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: "Luffy",
      power: 1000
    }, {
      name: "Zoro",
      power: 1000
    }
  ];
  
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter(index: number) {
  //   this.onDelete.emit(index);
  //   console.log(index);
  // }

  // delete(id?: string ){
  //   if(!id) return;
  //   this.onDelete.emit(id);
  // }

  deleteById(id?: string){
    if(!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
 

}
