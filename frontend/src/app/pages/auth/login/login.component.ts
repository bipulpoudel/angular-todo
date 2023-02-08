import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private snackBar: MatSnackBar
  ) {}

  formData = {
    email: '',
    password: '',
  };

  loading = false;
  errorMessage = '';

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      let data = {
        email: this.formData?.email || '',
        password: this.formData?.password || '',
      };

      this.authServices.login(data).subscribe(
        (res) => {
          this.loading = false;
          this.loginForm.reset();
        },
        (err) => {
          this.loading = false;
          const { error } = err;

          if (error?.message) {
            this.errorMessage = error.message;
          }
        }
      );
    }
  }
}
