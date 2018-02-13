import { NgModule } from '@angular/core';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { GraficarComponent } from './graficar/graficar.component';
// import { Component3Component } from './component3/component3.component';
// import { Component4Component } from './component4/component4.component';
// import { Component5Component } from './component5/component5.component';
import { AppComponent } from './app.component';


const routes = [
  // { path: 'inicio', component: InicioComponent },
  // { path: 'consultar', component: ConsultarComponent },
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' } },
  { path: 'consultar', component: ConsultarComponent, data: { animation: 'consultar' } },
  { path: 'graficar', component: GraficarComponent, data: { animation: 'graficar' } },
  // { path: 'component3', component: Component3Component },
  // { path: 'component4', component: Component4Component },
  // { path: 'component5', component: Component5Component },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

// export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [InicioComponent, ConsultarComponent];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});

// export class AppRoutingModule { }

