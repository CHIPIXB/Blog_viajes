import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { RouterLink } from '@angular/router';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private postService = inject(PostService)


  arrPosts: Post[] = this.postService.getAll()





}
