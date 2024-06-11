import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {SplashScreenComponent} from "./pages/splash-screen/splash-screen.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./services/auth-guard.service";
import {DescobrirComponent} from "./pages/descobrir/descobrir.component";
import {SacolaComponent} from "./pages/sacola/sacola.component";
import {PerfilComponent} from "./pages/perfil/perfil.component";
import {HomeAgricultorComponent} from "./pages/home-agricultor/home-agricultor.component";
import {PerfilAgricultorComponent} from "./pages/perfil-agricultor/perfil-agricultor.component";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";
import {TornarAgricultorComponent} from "./pages/tornar-agricultor/tornar-agricultor.component";
import {CancelarAgricultorComponent} from "./pages/cancelar-agricultor/cancelar-agricultor.component";
import {ManterProdutoComponent} from "./pages/manter-produto/manter-produto.component";
import {AddProdutoComponent} from "./pages/manter-produto/add-produto/add-produto.component";

export const routes: Routes = [
  {
    path: "",
    component: SplashScreenComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home-agricultor",
    component: HomeAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "descobrir",
    component: DescobrirComponent,
  canActivate: [AuthGuard]
  },
  {
    path: "sacola",
    component: SacolaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil-agricultor",
    component: PerfilAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "forbidden",
    component: ForbiddenComponent
  },
  {
    path: "tornar-agricultor",
    component: TornarAgricultorComponent
  },
  {
    path: "cancelar-agricultor",
    component: CancelarAgricultorComponent
  },
  {
    path: "manter-produto",
    component: ManterProdutoComponent
  },
  {
    path: "manter-produto/add",
    component: AddProdutoComponent
  }
];
