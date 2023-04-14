import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  selector: 'app-delete',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class DeleteComponent {
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
  display2=false;
  display1=false;

  displayperm=false;

  displayprefer=false;

  displayattri=false;

  displayacl=false;
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

getSelectedValueAccess(event:any){

  // Prints selected value

  var d=event.target.value;
  if(d=='Permission'){
  //  this.display1 = false;
  this.displayprefer=false;
  this.displayattri=false;
  this.displayacl=false;
    this.displayperm=!this.displayperm;
  }
  else if(d=='Preferences'){
    //  this.display1 = false;
    this.displayperm=false;

    this.displayattri=false;
    this.displayacl=false;

      this.displayprefer=!this.displayprefer;
    }
    else if(d=='Attribute'){
      //  this.display1 = false;

      this.displayprefer=false;

      this.displayacl=false;
        this.displayperm=false;
        this.displayattri=!this.displayattri;
      }
      else if(d=='ACL'){
        //  this.display1 = false;
        this.displayprefer=false;
        this.displayattri=false;


        this.displayperm=false;
          this.displayacl=!this.displayacl;
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
