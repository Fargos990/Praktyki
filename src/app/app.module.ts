import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { RouterModule, Routes } from '@angular/router';
import { MetodykiComponent } from './metodyki/metodyki.component';

const appRoutes : Routes = 
[
  { path: '', component:AngularComponent},
  { path: 'metodyki', component:MetodykiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MetodykiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
