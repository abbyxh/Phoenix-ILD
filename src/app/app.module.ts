import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { ILDDisplayComponent } from './ild-display/ild-display.component';

let routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ild', component: ILDDisplayComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ILDDisplayComponent,
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