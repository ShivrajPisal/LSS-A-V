import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { apicall } from '../apicall.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-table',
  templateUrl: './tablesingprefer.component.html',
  styleUrls: ['./tablesingprefer.component.scss']
})
export class TablesingpreferComponent {
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
