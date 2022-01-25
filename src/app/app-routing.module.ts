import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUsuariosComponent } from './components/dashboard/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path:'layout', component: LayoutComponent},
  {path:'dashboard', component: DashboardComponent,
    children:[
      {path:'', component: ListUsuariosComponent},
      {path:'usuario/:id', component: UsuarioComponent}
    ]
  },
  {path:"**",redirectTo:'layout', pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
