import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  titulo: string = 'Meu Primeiro Componente Angular';
  valor: number = 0;
  linkAngular: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  historico: string[] = [];

  clicou(tipo: string) {
    if (tipo === 'soma') {
      this.valor++;
      this.historico.push(`Aumentou para ${this.valor}`);
    } else {
      this.valor--;
      this.historico.push(`Diminuiu para ${this.valor}`);
    }
  }
}