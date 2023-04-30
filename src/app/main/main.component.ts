import { Component,OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { apicall } from '../apicall.service';
import { Subscription } from 'rxjs'
import {
  DfProgressIndicatorService,
  DfProgressIndicatorRef,
  DfProgressIndicatorContentType,
  DfProgressIndicatorContentPosition,
  DfProgressIndicatorContent,
  DfProgressIndicatorContentSpinner,
  DfProgressIndicatorContentProgressBar,
  DfProgressIndicatorOptions,
  DfProgressIndicatorModule
} from '@design-factory/design-factory';

 class AppModule {}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
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

  alertfunc(warn: string){

    alert("Please fill all the fields");
  }
  // openGlobalIndicator(content?: boolean | TemplateRef<unknown>) {
  //   let ref: DfProgressIndicatorRef;
  //   if (content === true) {
  //     ref = this.progressIndicatorService.open(CustomizedIndicatorComponent);
  //   } else {
  //     ref = this.progressIndicatorService.open(content || undefined);
  //   }
  //   setTimeout(() => {
  //     this.progressIndicatorService.close(ref);
  //   }, this.EXAMPLE_TIME);
  // }


  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
}
  myClickFunction(event:any) {
    let first_name = (<HTMLInputElement>document.getElementById("office")).value;
  }
  // for single list input fields
  display2=false;
  display1=false;

  displayperm=false;

  displayprefer=false;

  displayattri=false;

  displayacl=false;

  //for tables list access
displaybase=true;

  displaylistperm=false;

  displaylistprefer=false;

  displaylistattri=false;

  displaylistacl=false;


// For tables single acceess
// displaybase=true;

  displaysingperm=false;

  displaysingprefer=false;

  displaysingattri=false;

  displaysingacl=false;


     hidfunc1(){

          this.display1= !this.display1;

}
hidfunc2(){

  this.display2 = !this.display2;

}
getSelectedValue(event:any){

  // Prints selected value

  var d=event.target.value;
  if(d=='Single-Access'){
   this.display1 = false;
    this.display2=!this.display2;
  }

  else if(d=='List-Access')
  {
  this.display2=false;
  this.display1=!this.display1;
  }

}


getSelectedValueAccessList(event:any){

  // Prints selected value

  var d=event.target.value;
  if(d=='Permission'){
   this.displaybase = false;
       this.displaylistattri=false;
       this.displaylistprefer=false;
    this.displaylistperm=!this.displaylistperm;

    this.displaysingprefer=false;
    this.displaysingattri=false;
    this.displaysingacl=false;
      this.displaysingperm=false;
  }
  else if(d=='Preferences'){
    //  this.display1 = false;
    this.displaybase=false;
    this.displaylistperm=false;

    this.displaylistattri=false;
    this.displaylistacl=false;

      this.displaylistprefer=!this.displaylistprefer;

      this.displaysingprefer=false;
      this.displaysingattri=false;
      this.displaysingacl=false;
        this.displaysingperm=false;
    }
    else if(d=='Attribute'){
      //  this.display1 = false;
    this.displaybase=false;
      this.displaylistprefer=false;

      this.displaylistacl=false;
        this.displaylistperm=false;
        this.displaylistattri=!this.displaylistattri;

        this.displaysingprefer=false;
        this.displaysingattri=false;
        this.displaysingacl=false;
          this.displaysingperm=false;
      }
      else if(d=='ACL'){
        //  this.display1 = false;

        this.displaybase=false;
        this.displaylistprefer=false;
        this.displaylistattri=false;


        this.displaylistperm=false;
          this.displaylistacl=!this.displaylistacl;

          this.displaysingprefer=false;
          this.displaysingattri=false;
          this.displaysingacl=false;
            this.displaysingperm=false;
        }


      }

  // else if(d=='List-Access*')
  // {
  // this.display2=false;
  // this.display1=!this.display1;
  // }




getSelectedValueAccessSingle(event:any){

  // Prints selected value

  var d=event.target.value;
  if(d=='Permission'){
  //  this.display1 = false;
  this.displayprefer=false;
  this.displayattri=false;
  this.displayacl=false;
  this.displayperm=!this.displayperm;




this.displaybase=false;
    this.displaysingprefer=false;
  this.displaysingattri=false;
  this.displaysingacl=false;
    this.displaysingperm=!this.displaysingperm;

    this.displaylistprefer=false;

    this.displaylistacl=false;
      this.displaylistperm=false;
      this.displaylistattri=false;
  }
  else if(d=='Preferences'){
    //  this.display1 = false;
    this.displayperm=false;

    this.displayattri=false;
    this.displayacl=false;
    this.displayprefer=!this.displayprefer;




      this.displaybase=false;

      this.displaysingperm=false;
  this.displaysingattri=false;
  this.displaysingacl=false;
    this.displaysingprefer=!this.displaysingprefer;

    this.displaylistprefer=false;

    this.displaylistacl=false;
      this.displaylistperm=false;
      this.displaylistattri=false;
    }
    else if(d=='Attribute'){
      //  this.display1 = false;

      this.displayprefer=false;

      this.displayacl=false;
        this.displayperm=false;
        this.displayattri=!this.displayattri;
        this.displaysingattri=!this.displaysingattri;


        this.displaybase=false;

        this.displaysingprefer=false;
  this.displaysingperm=false;
  this.displaysingacl=false;


    this.displaylistprefer=false;

    this.displaylistacl=false;
      this.displaylistperm=false;
      this.displaylistattri=false;
      }
      else if(d=='ACL'){
        //  this.display1 = false;
        this.displayprefer=false;
        this.displayattri=false;


        this.displayperm=false;
          this.displayacl=!this.displayacl;
          this.displaysingacl=!this.displaysingacl;


          this.displaybase=false;

          this.displaysingprefer=false;
        this.displaysingattri=false;


        this.displaysingperm=false;



          this.displaylistprefer=false;

          this.displaylistacl=false;
            this.displaylistperm=false;
            this.displaylistattri=false;


        }
  // else if(d=='List-Access*')
  // {
  // this.display2=false;
  // this.display1=!this.display1;
  // }

}

// getSelectedValueAt(event:any){

//   // Prints selected value
//   var d=event.target.value;
//   if(d=='Single-Access *'){
//    this.display1 = false;
//     this.display2=!this.display2;
//   }

//   else if(d=='List-Access*')
//   {
//   this.display2=false;
//   this.display1=!this.display1;
//   }

// }
// getSelectedValueButton(){

// this.display1=!this.display1;

// }


}

  export class NgbdDropdownBasic {
    options = ['Action 1', 'Another action', 'Something else is here', 'Disabled'];

    dropdownSelected: (number | undefined)[] = [undefined, undefined, undefined];
    dropdownSelect(dropdownId: number, id: number) {
      this.dropdownSelected[dropdownId] = id;
    }
  }

  // export class ApiIntegrate implements OnInit {



  // }
