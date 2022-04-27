import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { RouterModule, Routes } from '@angular/router';
import { MetodykiComponent } from './metodyki/metodyki.component';
import { KaskadowyComponent } from './kaskadowy/kaskadowy.component';

const appRoutes : Routes = 
[
  { path: '', component:AngularComponent},
  { path: 'metodyki', component:MetodykiComponent},
  {path:'metodyki/kaskadowy', component:KaskadowyComponent},
  {path:'metodyki/spiralny', component:AngularComponent},
  {path:'metodyki/prototypowy', component:AngularComponent},
  {path:'metodyki/agile', component:AngularComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MetodykiComponent,
    KaskadowyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
