import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DBZService {
    constructor() { }
    public characters: Character[]=[
        {
            
            id:uuuid(),
            name:"Luffy",
            power:1000
        },{
            id:uuuid(),
            name:"Zoro",
            power:1000
        },
        {
            id:uuuid(),
            name:"Namy",
            power:1000
        },{
            id:uuuid(),
            name:"Usopp",
            power:1000
        },{
            id:uuuid(),
            name:"Sanji",
            power:700
        },{
            id:uuuid(),
            name:"Choper",
            power:200
        },{
            id:uuuid(),
            name:"Frankly",
            power:500
        },{
            id:uuuid(),
            name:"Jimbe",
            power:800
        }
    ];
    
    onNewCharacters(character: Character){
        console.log("MainPage");
        const characterUiid:Character={...character, id:uuuid()};
        console.log(characterUiid);
        this.characters.push(characterUiid);
    }

  onDelete(index:number){
    this.characters.splice(index, 1);
  }

    onDeleteById(id: string){
       this.characters= this.characters.filter(response=> 
        response.id !== id
        );
        
    }
}