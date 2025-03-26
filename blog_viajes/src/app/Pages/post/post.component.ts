import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() idpost: string | undefined
  postService = inject(PostService)


  get post() {
    return this.postService.getById(Number(this.idpost))
  }



}




