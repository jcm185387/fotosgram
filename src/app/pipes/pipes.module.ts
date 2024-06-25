import { NgModule } from '@angular/core';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ DomSanitizerPipe ],
  /*
  imports: [
    CommonModule
  ]
  */
 exports: [
  DomSanitizerPipe
 ]
})
export class PipesModule { }
