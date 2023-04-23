import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorOnHover]'
})
export class ChangeColorOnHoverDirective {
  private originalColor?: string;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.originalColor = this.elementRef.nativeElement.style.color;
  }

  ngOnDestroy(){
    this.elementRef.nativeElement.style.color = this.originalColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.color = '#f44336';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.color = this.originalColor;
  }

}
