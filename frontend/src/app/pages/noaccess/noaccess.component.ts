import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.scss'],
})
export class NoaccessComponent {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  loading = false;

  makeAdmin() {
    this.loading = true;

    this.authService.makeAdmin().subscribe({
      next: (res: any) => {
        this.loading = true;

        const { data } = res;

        this.tokenService.saveToken(data.token);
        this.loading = false;

        window.location.reload();
      },
      error: (err: any) => {
        console.log(err);
        this.loading = false;
      },
    });
  }
}
