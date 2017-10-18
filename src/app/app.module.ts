import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { ConverterComponent } from './converter/converter.component';
import { ServiceComponent } from './service/service.component';
import {DataService} from './data.service';


const appRoutes: Routes = [
  {
    path : 'todo',
    component : TodoComponent
  },
  {
    path: "info",
    component : InfoComponent
  },
  {
    path : "form",
    component : FormComponent
  },
  {
    path : "converter",
    component : ConverterComponent
  },
  {
    path : "service",
    component : ServiceComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InfoComponent,
    FormComponent,
    ConverterComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
