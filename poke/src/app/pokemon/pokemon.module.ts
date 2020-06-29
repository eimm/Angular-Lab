import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { TopLeftThingyComponent } from './top-left-thingy/top-left-thingy.component';



@NgModule({
  declarations: [GridComponent, HeaderComponent, ItemComponent, TopLeftThingyComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
