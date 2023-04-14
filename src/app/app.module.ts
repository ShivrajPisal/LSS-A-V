import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { formComponent } from './form/form.component';
import {TableComponent} from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { DeleteComponent } from './main/main.component';
import { FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    formComponent,
    DeleteComponent,
    TableComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    RouterModule.forRoot([
      {path:'delete', component:DeleteComponent},
      {path:'table',component:TableComponent},
      {path:'table2',component:Table2Component}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
