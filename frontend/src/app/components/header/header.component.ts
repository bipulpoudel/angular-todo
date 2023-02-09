import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private tokenService: TokenService, private router: Router) {}

  logOut() {
    this.tokenService.signOut();

    this.router.navigate(['/auth/login']);

    window.location.reload();
  }
}
