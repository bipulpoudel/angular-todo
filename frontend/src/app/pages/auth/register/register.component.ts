import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private tokenService: TokenService
  ) {}

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  loading = false;
  errorMessage = '';

  registerForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      let data = {
        firstName: this.formData?.firstName || '',
        lastName: this.formData?.lastName || '',
        email: this.formData?.email || '',
        password: this.formData?.password || '',
        type: 'user',
      };

      this.authServices.register(data).subscribe({
        next: (res: any) => {
          const { data } = res;
          this.tokenService.saveToken(data.token);
          this.loading = false;
          this.registerForm.reset();
        },
        error: (err) => {
          const { error } = err;
          this.loading = false;
          this.errorMessage = error.message;
        },
      });
    }
  }
}
