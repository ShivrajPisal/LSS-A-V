import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { apicall } from '../apicall.service';
import { NgFor, NgIf } from '@angular/common';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs';
import {  CommonModule} from "@angular/common";



const FILTER_PAG_REGEX = /[^0-9]/g;


@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  imports: [NgbPaginationModule,NgFor,NgIf,CommonModule],
  styleUrls: ['./table.component.scss']
})



export class TableComponent {
page = 1;


pageSize = 20;

selectPage(page: string) {
  this.page = isNaN(parseInt(page, 10)) ? 1: parseInt(page, 10);
}

formatInput(input: HTMLInputElement) {
  input.value = input.value.replace(FILTER_PAG_REGEX, '');
}





// API fetching
  subscription = new Subscription();

  posts:any;




   url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private service:apicall) {


  }



   ngOnInit() {

  this.getPostList(this.url);

  }

  public getPostList(url:any){

   this.subscription.add(

   this.service.getPosts(url)

   .subscribe(res => {

   console.log('--------');

  this.posts = res;

   console.log(this.posts);




   },)

  );

   }

}

