import { Routes } from '@angular/router';
import {ILDDisplayComponent} from "./ild-display/ild-display.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'ild', component: ILDDisplayComponent }
];