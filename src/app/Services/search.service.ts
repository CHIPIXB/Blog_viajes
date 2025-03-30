import { inject, Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private postService = inject(PostService)
  post: Post[] = []

  getByCategory(cat: string) {
    return this.postService.getAll().filter(post => post.categoria === cat)
  }

  todasCategorias() {
    return ['playa', 'montaña', 'ciudad', 'festival', 'rural']
  }

}
