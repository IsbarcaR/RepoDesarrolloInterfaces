import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman','Ironman','Hulk','Martosman','Thor'];
  public heroeBorrado?:string ;
  public herosrandom:string[]= [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Flash",
    "Green Lantern",
    "Aquaman",
    "Deadpool",
    "Wolverine",
    "Captain Marvel",
    "Doctor Strange",
    "Ant-Man",
    "Black Panther",
    "Daredevil",
    "Green Arrow",
    "The Punisher",
    "Luke Cage",
    "Jessica Jones",
    "Storm",
    "Cyclops",
    "Rogue",
    "Silver Surfer",
    "Spawn",
    "Gambit",
    "Shazam",
    "Ms. Marvel",
    "Nightwing",
    "Star-Lord",
    "Gamora",
    "Rocket Raccoon",
    "Drax",
    "Groot",
    "Link",
    "Zelda",
    "Mario",
    "Sonic",
    "Lara Croft",
    "Samus Aran",
    "Cloud Strife",
    "Kratos",
    "Geralt of Rivia",
];
  borrarUltimo(): void {
    if (this.heroeNames.length > 0) {
      this.heroeBorrado=this.heroeNames.pop();
    }
  }
  resetHeroes(): void {
    this.heroeNames = ['Spiderman','Ironman','Hulk','Martosman','Thor'];
    this.heroeBorrado = undefined;
  }
  addHero(): void {
    this.heroeNames.push(this.herosrandom[Math.floor(Math.random()*this.heroeNames.length)]);
    
  }

}


