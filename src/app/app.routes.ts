import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup-initial/signup.component';
import {SplashScreenComponent} from "./pages/splash-screen/splash-screen.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./services/auth-guard.service";
import {DescobrirComponent} from "./pages/descobrir/descobrir.component";
import {SacolaComponent} from "./pages/sacola/sacola.component";
import {PerfilComponent} from "./pages/perfil/perfil.component";

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
    path: "descobrir",
    component: DescobrirComponent,
  },
  {
    path: "sacola",
    component: SacolaComponent,
  },
  {
    path: "perfil",
    component: PerfilComponent,
  }
];
