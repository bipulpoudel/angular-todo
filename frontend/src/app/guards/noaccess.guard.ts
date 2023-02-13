import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root',
})

// This guard is used to prevent users from accessing the login page and register page if they are already logged in.
export class NoAccessGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.tokenService.getToken();

    if (!token) {
      // navigate to login page
      this.router.navigate([
        '/auth/login',
        {
          message:
            "You don't have access to this page. Login as admin to continue.",
        },
      ]);

      return false;
    }

    const decoded: any = this.tokenService.decodeToken(token);

    if (decoded.type === 'admin') {
      // navigate to home page
      this.router.navigate(['/admin']);

      return false;
    }

    return true;
  }
}
