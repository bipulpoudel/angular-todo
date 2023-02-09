import { Component } from '@angular/core';
import { TokenService } from './services/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  userLoggedIn = false;

  constructor(private tokenService: TokenService) {}

  checkUserLoggedIn(): void {
    let token = this.tokenService.getToken();

    if (token !== '' && token !== null) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  ngOnChanges(changes: any): void {
    this.checkUserLoggedIn();
  }

  ngOnInit(): void {
    this.checkUserLoggedIn();
  }
}
