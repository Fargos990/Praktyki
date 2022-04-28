import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { RouterModule, Routes } from '@angular/router';
import { MetodykiComponent } from './metodyki/metodyki.component';
import { KaskadowyComponent } from './kaskadowy/kaskadowy.component';
import { SpiralnyComponent } from './spiralny/spiralny.component';
import { PrototypowyComponent } from './prototypowy/prototypowy.component';

const appRoutes : Routes = 
[
  { path: '', component:AngularComponent},
  { path: 'metodyki', component:MetodykiComponent, children:[
    { path:'kaskadowy', component:KaskadowyComponent },
    { path:'spiralny', component:SpiralnyComponent },
    { path:'prototypowy', component:PrototypowyComponent },
  ]},
  {path:'metodyki/agile', component:AngularComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MetodykiComponent,
    KaskadowyComponent,
    SpiralnyComponent,
    PrototypowyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
