import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { ILDDisplayComponent1 } from './ild-display/ild-display.component';
import { ILDDisplayComponent2 } from './ild-display-v11/ild-display-v11.component';
import { ILDDisplayComponent3 } from './ild-v09/ild-v09.component';
import { ILDDisplayComponent4 } from './ild-s2-v02/ild-s2-v02.component';

let routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ild1', component: ILDDisplayComponent1 },
  { path: 'ild2', component: ILDDisplayComponent2 },
  { path: 'ild3', component: ILDDisplayComponent3 },
  { path: 'ild4', component: ILDDisplayComponent4 }
]

@NgModule({
  declarations: [
    AppComponent,
    ILDDisplayComponent1,
    ILDDisplayComponent2,
    ILDDisplayComponent3,
    ILDDisplayComponent4,
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