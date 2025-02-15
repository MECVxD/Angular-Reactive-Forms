import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-registerPage',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required, cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public isValidField(field: string) {
    //TODO obtener validación desde un servicio
  }

  public onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
