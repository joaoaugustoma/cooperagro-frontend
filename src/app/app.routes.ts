import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupInitialComponent } from './pages/signup-initial/signup-initial.component';
import {SplashScreenComponent} from "./pages/splash-screen/splash-screen.component";
import {SignupFinalComponent} from "./pages/signup-final/signup-final.component";
import {SignupSecondComponent} from "./pages/signup-second/signup-second.component";

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
    component: SignupInitialComponent
  },
  {
    path: "signup-second",
    component: SignupSecondComponent
  },
  {
    path: "signup-final",
    component: SignupFinalComponent
  }
];
