import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { AuthenticateService } from './authenticate.service';

@NgModule({
  imports: [ 
  BrowserModule, 
  ReactiveFormsModule,
  HttpClientModule,
  AppRoutingModule 
  ],

  declarations: [ 
    AppComponent, 
    LoginComponent, RegisterComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, AuthenticateService]
})

export class AppModule { }