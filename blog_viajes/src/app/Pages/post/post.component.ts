import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { Post } from '../../Interfaces/post';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() idpost: string | undefined
  postService = inject(PostService)
  post: Post | undefined
  private router = inject(Router)

  ngOnInit() {
    this.post = this.postService.getById(Number(this.idpost))
  }

  delete() {
    this.postService.deletePost(Number(this.post?.id))
    this.router.navigate(['/home'])
  }


}




