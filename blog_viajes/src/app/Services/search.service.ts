import { inject, Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private postService = inject(PostService)
  post: Post[] = []

  filtrarPorCategoria(categoria: string) {
    return this.postService.getAllPost().filter(post => post.categoria === categoria);
  }

  todasCategorias() {
    return ['playa', 'montaña', 'ciudad', 'festival', 'rural'];
  }

}
