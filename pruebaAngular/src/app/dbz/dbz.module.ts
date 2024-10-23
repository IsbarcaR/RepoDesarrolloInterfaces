import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
