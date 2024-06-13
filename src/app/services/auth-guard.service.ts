import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {
  }

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
          if ((url.includes('home-agricultor') || url.includes('perfil-agricultor') || url.includes('manter-produto')
            || url.includes('manter-produto/add') || url.includes('cancelar-agricultor')
              || url.includes('pedidos-agricultor') || url.includes('pedidos-agricultor/detalhes'))
            && userRole === 'ROLE_AGRICULTOR') {
            return true;
          } else if ((url.includes('home') || url.includes('perfil') || url.includes('perfil/editar')
            || url.includes('descobrir') || url.includes('sacola')  || url.includes('sacola/confirmar')
              || url.includes('sacola/pagamento')  || url.includes('sacola/pagamento/confirmar')
              || url.includes('produtos') || url.includes('produtos/loja') || url.includes('produtos/detalhes') || url.includes('meus-pedidos')  || url.includes('meus-pedidos/detalhes')
              || url.includes('tornar-agricultor'))
            && userRole === 'ROLE_USUARIO') {
            return true;
          } else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        } else {
          this.router.navigate(['/login']);
          this.loginService.logout();
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
