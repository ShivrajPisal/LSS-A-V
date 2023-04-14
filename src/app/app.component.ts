import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  scrHeight:any;
  scrWidth:any
  @HostListener('window:resize',['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  
    
    
  }
  constructor(){
    
   this.getScreenSize();
}
  
  title = 'aplication';
}
