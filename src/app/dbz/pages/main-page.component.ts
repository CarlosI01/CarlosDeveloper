import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';
@Component({
    selector: 'app-main-page',
    templateUrl: './maint-page.componet.html'
})

export class MainPageComponent implements OnInit {
    constructor(private dbzService: DBZService) { 

    }

    ngOnInit() { }

  get Character():Character[]{
    return [...this.dbzService.characters];
  }

  OnDeleteCharacter(id: string){
    this.dbzService.onDeleteById(id);
  }
  AddCharacter(character: Character){
    this.dbzService.onNewCharacters(character);
  }

  
}