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
import {ConsultaProdutosComponent} from "./pages/consulta-produtos/consulta-produtos.component";
import {PedidosComponent} from "./pages/pedidos/pedidos.component";
import {EditPerfilComponent} from "./pages/perfil/edit-perfil/edit-perfil.component";
import {DetalhesPedidoComponent} from "./pages/detalhes-pedido/detalhes-pedido.component";
import {ConfirmarSacolaComponent} from "./pages/sacola/confirmar-sacola/confirmar-sacola.component";
import {PagamentoSacolaComponent} from "./pages/sacola/pagamento-sacola/pagamento-sacola.component";
import {
  ConfirmarPagamentoSacolaComponent
} from "./pages/sacola/pagamento-sacola/confirmar-pagamento-sacola/confirmar-pagamento-sacola.component";
import {PedidosAgricultorComponent} from "./pages/pedidos-agricultor/pedidos-agricultor.component";
import {
  DetalhesPedidoAgricultorComponent
} from "./pages/detalhes-pedido-agricultor/detalhes-pedido-agricultor.component";
import {VisualizarLojaComponent} from "./pages/consulta-produtos/visualizar-loja/visualizar-loja.component";
import {VisualizarProdutoComponent} from "./pages/consulta-produtos/visualizar-produto/visualizar-produto.component";
import {
  EditPerfilAgricultorComponent
} from "./pages/perfil-agricultor/edit-perfil-agricultor/edit-perfil-agricultor.component";

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
    path: "sacola/confirmar",
    component: ConfirmarSacolaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sacola/pagamento",
    component: PagamentoSacolaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sacola/pagamento/confirmar",
    component: ConfirmarPagamentoSacolaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil/editar",
    component: EditPerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil-agricultor",
    component: PerfilAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "perfil-agricultor/editar",
    component: EditPerfilAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "pedidos-agricultor",
    component: PedidosAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "pedidos-agricultor/detalhes",
    component: DetalhesPedidoAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "forbidden",
    component: ForbiddenComponent
  },
  {
    path: "tornar-agricultor",
    component: TornarAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cancelar-agricultor",
    component: CancelarAgricultorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "manter-produto",
    component: ManterProdutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "manter-produto/add",
    component: AddProdutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "produtos",
    component: ConsultaProdutosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "produtos/loja",
    component: VisualizarLojaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "produtos/detalhes",
    component: VisualizarProdutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "meus-pedidos",
    component: PedidosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "meus-pedidos/detalhes",
    component: DetalhesPedidoComponent,
    canActivate: [AuthGuard]
  }
];
