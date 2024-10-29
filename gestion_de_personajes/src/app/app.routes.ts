import { Routes } from '@angular/router';
import { PageListaComponent } from './pages/page-lista/page-lista.component';
import { AddPersonajeComponent } from './pages/add-personaje/add-personaje.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { FormularioModificarComponent } from './components/formulario-modificar/formulario-modificar.component';
import { PageModificarComponent } from './pages/page-modificar/page-modificar.component';

export const routes: Routes = [
    {path: 'lista', component: PageListaComponent},
    {path: 'agregar', component: AddPersonajeComponent},
    {path: 'detalle/:id', component: DetallePersonajeComponent},
    {path: 'editar/:id', component: PageModificarComponent},
    {path: '', redirectTo: '/lista', pathMatch: 'full'},
    {path: '**', redirectTo: '/lista', pathMatch: 'full'}
];
