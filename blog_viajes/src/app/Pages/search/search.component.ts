import { Component, inject } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private searchService = inject(SearchService)

  categorias: string[] = []
  postsFiltrados: Post[] = []
  ordenAscendente: boolean = true

  ngOnInit() {
    this.categorias = this.searchService.todasCategorias()
  }

  filtrarPorCategoria(categoria: string) {
    this.postsFiltrados = this.searchService.getByCategory(categoria)
  }

  ordenarPorTitulo() {
    this.postsFiltrados.sort((a, b) => {
      return this.ordenAscendente ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo)
    })

    this.ordenAscendente = !this.ordenAscendente;
  }




}

