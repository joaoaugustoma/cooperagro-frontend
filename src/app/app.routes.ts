import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupInitialComponent } from './pages/signup-initial/signup-initial.component';
import {SplashScreenComponent} from "./pages/splash-screen/splash-screen.component";

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
  }
];
