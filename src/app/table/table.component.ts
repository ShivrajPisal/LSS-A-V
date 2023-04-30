import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { apicall } from '../apicall.service';
import { NgIf } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

const FILTER_PAG_REGEX = /[^0-2]/g;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  // standalone: true,
  // imports: [NgIf, NgbPaginationModule],
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  page = 1;

  selectPage(page: string) {
    this.page = isNaN(parseInt(page, 5)) ? 1 : parseInt(page, 5);
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
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

