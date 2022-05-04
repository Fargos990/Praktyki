import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { RouterModule, Routes } from '@angular/router';
import { MetodykiComponent } from './metodyki/metodyki.component';
import { KaskadowyComponent } from './kaskadowy/kaskadowy.component';
import { SpiralnyComponent } from './spiralny/spiralny.component';
import { PrototypowyComponent } from './prototypowy/prototypowy.component';
import { EkstremalneComponent } from './ekstremalne/ekstremalne.component';
import { AgileComponent } from './agile/agile.component';
import { ScrumComponent } from './scrum/scrum.component';
import { ProcesComponent } from './proces/proces.component';

const appRoutes : Routes = 
[
  { path: '', component:AngularComponent},
  { path: 'metodyki', component:MetodykiComponent, children:[
    { path:'kaskadowy', component:KaskadowyComponent },
    { path:'spiralny', component:SpiralnyComponent },
    { path:'prototypowy', component:PrototypowyComponent },
    { path:'ekstremalne', component:EkstremalneComponent },
    { path:'agile', component:AgileComponent },
    { path:'scrum', component:ScrumComponent },
  ]},
  {path:'proces',component:ProcesComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MetodykiComponent,
    KaskadowyComponent,
    SpiralnyComponent,
    PrototypowyComponent,
    EkstremalneComponent,
    AgileComponent,
    ScrumComponent,
    ProcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
