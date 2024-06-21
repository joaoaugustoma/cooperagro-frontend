import {Routes} from '@angular/router';
import {LoginComponent} from './pages/comum/login/login.component';
import {SignupComponent} from './pages/comum/signup/signup.component';
import {SplashScreenComponent} from "./pages/comum/splash-screen/splash-screen.component";
import {HomeComponent} from "./pages/cliente/home/home.component";
import {AuthGuard} from "./services/auth-guard.service";
import {DescobrirComponent} from "./pages/cliente/descobrir/descobrir.component";
import {HomeAgricultorComponent} from "./pages/agricultor/home-agricultor/home-agricultor.component";
import {SacolaComponent} from "./pages/cliente/sacola/sacola.component";
import {ConfirmarSacolaComponent} from "./pages/cliente/sacola/confirmar-sacola/confirmar-sacola.component";
import {PagamentoSacolaComponent} from "./pages/cliente/sacola/pagamento-sacola/pagamento-sacola.component";
import {PerfilComponent} from "./pages/cliente/perfil/perfil.component";
import {EditPerfilComponent} from "./pages/cliente/perfil/edit-perfil/edit-perfil.component";
import {PerfilAgricultorComponent} from "./pages/agricultor/perfil-agricultor/perfil-agricultor.component";
import {
  EditPerfilAgricultorComponent
} from "./pages/agricultor/perfil-agricultor/edit-perfil-agricultor/edit-perfil-agricultor.component";
import {PedidosAgricultorComponent} from "./pages/agricultor/pedidos-agricultor/pedidos-agricultor.component";
import {
  DetalhesPedidoAgricultorComponent
} from "./pages/agricultor/detalhes-pedido-agricultor/detalhes-pedido-agricultor.component";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";
import {TornarAgricultorComponent} from "./pages/cliente/tornar-agricultor/tornar-agricultor.component";
import {CancelarAgricultorComponent} from "./pages/agricultor/cancelar-agricultor/cancelar-agricultor.component";
import {ManterProdutoComponent} from "./pages/agricultor/manter-produto/manter-produto.component";
import {AddProdutoComponent} from "./pages/agricultor/manter-produto/add-produto/add-produto.component";
import {ConsultaProdutosComponent} from "./pages/cliente/consulta-produtos/consulta-produtos.component";
import {VisualizarLojaComponent} from "./pages/cliente/consulta-produtos/visualizar-loja/visualizar-loja.component";
import {
  VisualizarProdutoComponent
} from "./pages/cliente/consulta-produtos/visualizar-produto/visualizar-produto.component";
import {PedidosComponent} from "./pages/cliente/pedidos/pedidos.component";
import {DetalhesPedidoComponent} from "./pages/cliente/detalhes-pedido/detalhes-pedido.component";
import {
  PagamentoMercadoPagoComponent
} from "./pages/cliente/sacola/pagamento-sacola/pagamento-mercado-pago/pagamento-mercado-pago.component";


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
    path: "produtos/detalhes/:id",
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
  },
  {
    path: "mercado-pago/pagamento",
    component: PagamentoMercadoPagoComponent,
    canActivate: [AuthGuard]
  }
];
