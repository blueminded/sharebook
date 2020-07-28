import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [HeaderComponent, ActionIconComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
