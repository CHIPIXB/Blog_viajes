import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

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
    throw new Error('Method not implemented.');
  }

  checkError(field: string, validator: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(validator) && this.formulario.get(field)?.touched
  }
}
