import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piano';
  public sonidos :{[clave:string]:string}={
    sonido1 :'assets/sonidos/do.wav',
    sonido2 :'assets/sonidos/re.wav',
    sonido3 :'assets/sonidos/mi.wav',
    sonido4 :'assets/sonidos/fa.wav',
    sonido5 :'assets/sonidos/sol.wav',
    sonido6 :'assets/sonidos/la.wav',
    sonido7 :'assets/sonidos/si.wav',
    cazafantasmas: 'assets/sonidos/Ghostbusters.wav'


  } ;
  reproducirSonido(sound: string){
    const audio= new Audio(this.sonidos[sound]);
    audio.play();
  }
  reproducirHimno() {
    const estrofas = [
      [ // Primera estrofa
        'sonido1', 'sonido2', 'sonido3', 'sonido4', 'sonido5', // Do Re Mi Fa Sol
        'sonido5', // Sol
        'sonido6', 'sonido5', 'sonido4', // La Sol Fa
        'sonido7', 'sonido5', // Si Sol
        'sonido4', 'sonido3', 'sonido1', // Fa Mi Do
        'sonido5', // Sol
      ],
      [ // Segunda estrofa
        'sonido4', 'sonido3', 'sonido2', 'sonido1', // Fa Mi Re Do
        'sonido3', 'sonido3', 'sonido3', // Mi Mi Mi
        'sonido3', 'sonido3', 'sonido2', // Mi Mi Re
        'sonido1', // Do
      ],
      [ // Tercera estrofa
        'sonido5', 'sonido4', 'sonido3', // Sol Fa Mi
        'sonido1', // Do
        'sonido3', // Mi
        'sonido5', 'sonido4', 'sonido3', // Sol Fa Mi
        'sonido2', 'sonido1', // Re Do
      ]
    ];

    let tiempo = 0;

    estrofas.forEach((estrofa) => {
      estrofa.forEach((nota, index) => {
        setTimeout(() => {
          this.reproducirSonido(nota);
        }, tiempo);
        tiempo += 500; // Espacio de 500 ms entre las notas
      });
      tiempo += 1000; // Pausa de 1 segundo entre líneas
    });
  }
  
  

  
}
