import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSfondo]'
})
export class SfondoDirective {

  constructor(private ref : ElementRef) {
  this.ref.nativeElement.style.backgroundColor = "green";
  }
}
