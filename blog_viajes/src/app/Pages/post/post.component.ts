import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() idpost: string | undefined
  postService = inject(PostService)
  post: Post | undefined


  // get post() {
  //   return this.postService.getById(Number(this.idpost))
  // }

  ngOnInit() {
    this.post = this.postService.getById(Number(this.idpost))
  }



}




