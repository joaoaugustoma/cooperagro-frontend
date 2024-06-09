import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    try {
      await this.initializeStorage();
      const authToken = sessionStorage.getItem('auth-token');
      if (authToken) {
        const tokenPayload = jwtDecode<any>(authToken);
        const expirationDate = new Date(tokenPayload.exp * 1000);
        if (expirationDate > new Date()) {
          const userRole = tokenPayload.role;
          const url = state.url;
          if ((url.includes('home-agricultor') || url.includes('perfil-agricultor')) && userRole === 'ROLE_AGRICULTOR') {
            return true;
          } else if ((url.includes('home') || url.includes('perfil') || url.includes('descobrir') || url.includes('sacola')) && userRole === 'ROLE_USUARIO') {
            return true;
          } else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } catch (error) {
      console.error('Storage initialization error:', error);
      this.router.navigate(['/forbidden']);
      return false;
    }
  }

  private async initializeStorage(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
}
