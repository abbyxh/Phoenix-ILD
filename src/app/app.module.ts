import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { ILD_l5_o1_v02Component } from './ILD_l5_o1_v02/ILD_l5_o1_v02.component';
import { ILD_l5_v11Component } from './ILD_l5_v11/ILD_l5_v11.component';
import { ILD_l5_o2_v09Component } from './ILD_l5_o2_v09/ILD_l5_o2_v09.component';
import { ILD_s2_v02Component } from './ILD_s2_v02/ILD_s2_v02.component';

let routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ILD_l5_o1_v02', component: ILD_l5_o1_v02Component  },
  { path: 'ILD_l5_v11', component: ILD_l5_v11Component},
  { path: 'ILD_l5_o2_v09', component: ILD_l5_o2_v09Component },
  { path: 'ILD_s2_v02', component: ILD_s2_v02Component }
]

@NgModule({
  declarations: [
    AppComponent,
    ILD_l5_o1_v02Component ,
    ILD_l5_v11Component,
    ILD_l5_o2_v09Component,
    ILD_s2_v02Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}