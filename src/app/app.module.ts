import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { AsterikPipe } from './asterik.pipe';

const routes : Routes = [
  {path : 'register', component:RegisterComponent },
  {path : 'display', component:DisplayComponent },
  {path:'',redirectTo:'register',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayComponent,
    AsterikPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
