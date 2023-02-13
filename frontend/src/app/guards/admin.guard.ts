import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
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

    if (decoded.type !== 'admin') {
      // navigate to home page
      this.router.navigate([
        '/noaccess',
        {
          message:
            "You don't have access to this page. Login as admin to continue.",
        },
      ]);

      return false;
    }

    return true;
  }
}
