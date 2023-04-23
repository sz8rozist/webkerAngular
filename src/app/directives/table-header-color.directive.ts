import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTableHeaderColor]'
})
export class TableHeaderColorDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = "#f44336";
  }

}
