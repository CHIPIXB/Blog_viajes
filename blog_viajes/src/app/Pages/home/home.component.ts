import { Component, inject } from '@angular/core';
import { NewPostService } from '../../Services/post.service';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private newPostService = inject(NewPostService)

  arrPosts: Post[] = this.newPostService.getAllPost()

}
