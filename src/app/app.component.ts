import { ContainerComponent } from './componentes/container/container.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos : Contato[] = agenda

  filtroPoTexto: string = ''

  filtrarContatosPorTexto(): Contato [] {
    if(!this.filtroPoTexto){
      return this.contatos
    }

    return this.contatos.filter(contato => {
      return contato.nome.toLocaleUpperCase().includes (this.filtroPoTexto.toLocaleLowerCase())
    })
  }

  filtrarContatosPorLetraInicial (letras:string) :  Contato [] {
      return this.contatos.filter ( contato => {
        return contato.nome.toLocaleLowerCase().startsWith(letras)
      } )
  }
}

