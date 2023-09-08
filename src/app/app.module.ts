import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './Heroes/hero/hero.component';
import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './counter/counter/counter.module';
import { HeroesModule } from './Heroes/heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule, CounterModule, HeroesModule, DbzModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
