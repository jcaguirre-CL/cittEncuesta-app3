import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/////////////new import
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { routerTransition } from './router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { CittService } from './citt.service';
import { MessageService } from './message.service';
import { GraficarComponent } from './graficar/graficar.component';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';

import { FusionChartsModule } from 'angular4-fusioncharts';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConsultarComponent,
    GraficarComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme, PowerCharts)
  ],
  providers: [CittService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
