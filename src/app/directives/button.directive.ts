import { Directive } from '@angular/core';
import { HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }
  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundSize = '300% 150%';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundSize = '0% 300%';
  }
}
