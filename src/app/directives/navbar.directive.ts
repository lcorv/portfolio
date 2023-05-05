import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {
  move = false;
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;
  left = 0;
  t1 = 0;
  t2 = 0;
  top = 0;
  timeout;
  elmnt: any;
  nav: HTMLElement;
  page: HTMLElement;
  navToggle: HTMLElement;

  ngOnInit() {
    //this.position(this.el.nativeElement);
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }
  @HostListener("touchstart") dragMouseDown(e: MouseEvent) {
    this.nav = this.el.nativeElement.parentElement;
    this.timeout = setTimeout(() => {
      this.nav.classList.add('dragging');
      this.nav.classList.remove('navbar-small-open');
      window.navigator.vibrate(50);
    }, 300)
    this.t1 = new Date().getTime();
    this.move = true;
    e = e || window.event;
    e.preventDefault();
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    this.elmnt = this.el.nativeElement.id;

  }
  @HostListener("touchend") close(e: MouseEvent) {
    this.closeDragElement(e)
  }
  position(el) {
    let top = window.localStorage.getItem('top');
    let left = window.localStorage.getItem('left');
    el.style.top = top + "px";
    el.style.left = left + "px";
    if (this.nav.parentElement) {
      this.nav.parentElement.addEventListener('pointerdown', () => {
        this.nav.classList.remove('navbar-small-open')
      })
    }
  }
  @HostListener("document:pointermove") drag(e: MouseEvent) {
    e = e || window.event;
    if (this.move) {
      e.preventDefault();
      this.t2 = new Date().getTime();
      let delta = this.t2 - this.t1;
      if (delta > 300) {
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        let element = this.nav;
        element.style.position = "absolute";
        //element.style.zIndex = "999";
        element.style.cursor = "grabbing";
        this.top = (element.offsetTop - this.pos2);
        this.left = (element.offsetLeft - this.pos1);
        element.style.top = this.top + 'px';
        element.style.left = this.left + 'px';
      }
      else {
        if (e.clientX > this.pos3 || e.clientY > this.pos4) {
          this.closeDragElement(e)
        }
      }

    }
  }

  closeDragElement(e) {
    // stop moving when mouse button is released:
    e = e || window.event;
    e.preventDefault();
    this.nav = this.el.nativeElement.parentElement
    window.clearTimeout(this.timeout)
    this.nav.classList.remove('dragging');
    if (this.elmnt && this.left && this.top) {
      this.savePosition();
    }
    this.move = false;
    this.t2 = new Date().getTime();
    let delta = this.t2 - this.t1;
    if (delta < 300) {
      this.nav.classList.toggle('navbar-small-open')
      let overflow = this.el.nativeElement.parentElement.parentElement.clientWidth * 0.4
      if (this.nav.offsetLeft > overflow) {
        this.nav.style.left = overflow + 'px'
      }
    }
  }
  savePosition() {
    window.localStorage.setItem('top', this.el.nativeElement.parentElement.offsetTop)
    window.localStorage.setItem('left', this.el.nativeElement.parentElement.offsetLeft)
  }
}
