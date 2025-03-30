import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../Services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  private postService = inject(PostService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  uptade = false
  uptadeId: number | undefined

  existPost: Post | undefined


  formulario: FormGroup = new FormGroup({
    titulo: new FormControl('', [
      Validators.required
    ]),
    texto: new FormControl('', [
      Validators.required,
      Validators.minLength(50)
    ]),
    imagen: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i)
    ]),
    categoria: new FormControl('', [
      Validators.required
    ]),
    fecha_aventura: new FormControl('', [
      Validators.required
    ])
  })


  ngOnInit() {
    const idRoute = this.route.snapshot.paramMap.get('idpost');
    if (idRoute) {
      const existPost = this.postService.getById(Number(idRoute));
      if (existPost) {
        this.existPost = existPost;
        this.uptade = true;
        this.uptadeId = existPost.id;
        this.formulario.patchValue({
          titulo: existPost.titulo,
          texto: existPost.texto,
          imagen: existPost.imagen,
          categoria: existPost.categoria,
          fecha_aventura: existPost.fecha_aventura
        });
      }
    }
  }


  onSubmit() {
    if (this.formulario.valid) {
      const datos = this.formulario.value;

      if (this.uptade && this.existPost) {
        this.postService.updatePost({
          id: this.existPost.id,
          titulo: this.formulario.value.titulo,
          texto: this.formulario.value.texto,
          imagen: this.formulario.value.imagen,
          categoria: this.formulario.value.categoria,
          fecha_aventura: this.formulario.value.fecha_aventura
        });
      } else {
        this.postService.insert(datos);
      }

      this.router.navigateByUrl('/home');
    }
  }



  checkError(field: string, validator: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(validator) && this.formulario.get(field)?.touched
  }
}

