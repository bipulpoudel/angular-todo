import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// component imports::
import { HeaderComponent } from './components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

// pages imports::
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/auth/login/login.component';

// pages modules:
import { MaterialModule } from './material.module';
import { RegisterComponent } from './pages/auth/register/register.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TodoItemComponent,
    TodoFormComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
