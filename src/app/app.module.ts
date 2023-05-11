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
import { TablepreferComponent } from './tableprefer/tableprefer.component';

import { MainComponent } from './main/main.component';
import { FormsModule} from '@angular/forms';
// import { ApiIntegrate } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { TableattriComponent } from './tableattri/tableattri.component';
import { TableaclComponent } from './tableacl/tableacl.component';
import { TablesingpreferComponent } from './tablesingprefer/tablesingprefer.component';
import { TablesingattriComponent } from './tablesingattri/tablesingattri.component';
import { TablesingaclComponent } from './tablesingacl/tablesingacl.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    formComponent,
    MainComponent,
    // TableComponent,
    Table2Component,
    TablepreferComponent,
    TableattriComponent,
    TableaclComponent,
    TablesingpreferComponent,
    TablesingattriComponent,
    TablesingaclComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    RouterModule.forRoot([
      {path:'main', component:MainComponent},
      {path:'table',component:TableComponent},
      {path:'table2',component:Table2Component},
      {path:'tableprefer',component:TablepreferComponent},
         {path:'tableacl',component:TableaclComponent},
         {path:'tableattri',component:TableattriComponent},
         {path:'tablesingprefer',component:TablesingpreferComponent},
         {path:'tablesingattri',component:TablesingattriComponent},
         {path:'tablesingacl',component:TablesingaclComponent}







      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
