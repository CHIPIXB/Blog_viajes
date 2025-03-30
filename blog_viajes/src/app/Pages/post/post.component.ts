import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { Post } from '../../Interfaces/post';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() idpost: number | undefined
  post: Post | undefined

  private postService = inject(PostService)
  private router = inject(Router)

  ngOnInit() {
    this.post = this.postService.getById(Number(this.idpost))
  }

  delete() {
    Swal.fire({
      title: "¿Estás seguro de querer borrarlo?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "#2f5233",
      confirmButtonText: "Borrar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deletePost(Number(this.post?.id))
        this.router.navigate(['/home'])
        Swal.fire({
          title: "Borrado con éxito",
          text: "Tu blog se ha borrado",
          icon: "success"
        })
      }
    })
  }

}




