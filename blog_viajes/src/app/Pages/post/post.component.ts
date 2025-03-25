import { Component, Inject, inject, Input } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { ActivatedRoute, Router } from '@angular/router';
import { NewPostService } from '../../Services/post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post: Post | undefined
  postService = Inject(NewPostService)

}




