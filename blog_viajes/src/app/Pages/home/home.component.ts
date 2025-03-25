import { Component, inject, Input } from '@angular/core';
import { NewPostService } from '../../Services/post.service';
import { RouterLink } from '@angular/router';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private newPostService = inject(NewPostService)


  arrPosts: Post[] = this.newPostService.getAllPost()



}
