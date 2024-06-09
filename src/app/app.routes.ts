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
  }
];
