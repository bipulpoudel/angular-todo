import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  formData = {
    email: '',
    password: '',
  };

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.paramMap.get('message') || '';
  }

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

      this.authServices.login(data).subscribe({
        next: (res: any) => {
          const { data } = res;
          this.tokenService.saveToken(data.token);
          this.loading = false;
          this.loginForm.reset();

          window.location.reload();
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
