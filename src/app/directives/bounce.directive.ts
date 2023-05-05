import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBounce]'
})
export class BounceDirective {

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { }
@HostListener('mouseenter') onmouseenter(){
  this.renderer.addClass(this.el.nativeElement, 'bounce');
  console.log('ciao')
}
}
