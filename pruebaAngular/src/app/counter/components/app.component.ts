import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contador',
    template : `<h1> {{ title }}</h1>
    <hr>
    <p>Contador : {{counter}}</p>
    
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    
    `
})

export class ComponenteConti {
constructor(){}
    public title: string = 'Primera app de Angular';
    public counter: number = 10;

  increaseBy ( value : number):void {
    this.counter += value;
  }
  resetCounter ():void{
    this.counter = 10;
  }
    
}