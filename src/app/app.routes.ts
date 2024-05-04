import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedorDetailComponent } from './components/fornecedor-detail/fornecedor-detail.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'nova-rota', component:RotaComponent },
{ path: 'cliente/:id', component:ClientDetailComponent },
{ path: 'cliente', component: ClienteComponent},
{ path: 'fornecedor', component: FornecedorComponent },
{ path: 'fornecedor/:id', component: FornecedorDetailComponent },
{ path: '**', component: HomeComponent}


];
