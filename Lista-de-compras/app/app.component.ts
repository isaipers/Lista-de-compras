import { Component } from '@angular/core';

interface Item {
  id: number;
  nome: string;
  comprado: boolean;
  editando: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  novoItem: string = ''; 
  listaDeCompras: Item[] = [];
  idCounter: number = 0; 

  adicionarItem() {
    if (this.novoItem.trim() !== '') {
      const item: Item = {
        id: this.idCounter++,
        nome: this.novoItem.trim(),
        comprado: false,
        editando: false 
      };
      this.listaDeCompras.push(item);
      this.novoItem = ''; 
    }
  }

  editarItem(item: Item) {
    item.editando = true;
  }

  salvarEdicao(item: Item, novoNome: string) {
    if (novoNome.trim() !== '') {
      item.nome = novoNome.trim();
      item.editando = false;
    }
  }

  alternarStatus(item: Item) {
    item.comprado = !item.comprado;
  }

  excluirItem(id: number) {
    this.listaDeCompras = this.listaDeCompras.filter(item => item.id !== id);
  }

  get itensNaoComprados(): Item[] {
    return this.listaDeCompras.filter(item => !item.comprado);
  }

  get itensComprados(): Item[] {
    return this.listaDeCompras.filter(item => item.comprado);
  }
}
