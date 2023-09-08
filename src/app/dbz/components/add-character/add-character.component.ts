import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Addcharacter: Character={
    name: '',
    power: 0
  }

  ShowVist(){
    if(this.Addcharacter.name.length ===0) return;
    // debugger;
    this.onNewCharacter.emit(this.Addcharacter);
    console.log("Character");
    console.log(this.Addcharacter);
  }

}
