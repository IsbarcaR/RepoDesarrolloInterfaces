import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  dado1: number=1;
  dado2: number=1;
  mensajeVictoria: string="";
  rodando:boolean =false;

  constructor(){}
  lanzarDados() {
    this.rodando = true;
    this.mensajeVictoria = '';

    // Simular una animación de rodar dados
    setTimeout(() => {
      this.dado1 = Math.floor(Math.random() * 6) + 1;
      this.dado2 = Math.floor(Math.random() * 6) + 1;
      this.rodando = false;

      // Verificar si ambos dados son iguales
      if (this.dado1 === this.dado2) {
        this.mensajeVictoria = '¡Victoria! Los dados son iguales.';
      }
    }, 1000); // Duración de la "animación" en milisegundos
  }


}

