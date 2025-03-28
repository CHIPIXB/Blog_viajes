import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../Services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  postService = inject(PostService)
  router = inject(Router)

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


  onSubmit() {
    if (this.formulario.valid) {
      const response = this.formulario.value;
      this.postService.insert(response);
      this.router.navigateByUrl('/home');
    } else {
      console.log('error')
    }
  }


  checkError(field: string, validator: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(validator) && this.formulario.get(field)?.touched
  }
}
