import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEnter]'
})
export class EnterDirective {
  scrollWhatcher: HTMLDivElement;
  navObserver: IntersectionObserver;
  content: HTMLDivElement|null;
  constructor(
    private el: ElementRef
  ) { }
ngOnInit(){
  this.scrollWhatcher = document.createElement('div');
  this.scrollWhatcher.setAttribute('data-scroll-watcher','');
  this.scrollWhatcher.className = 'scroll-watcher';
  const options= {
    rootMargin: '500px 0px -200px 0px',
    threshold: 0
  }
  this.navObserver = new IntersectionObserver((entries)=>{
    this.el.nativeElement.classList.toggle('out', !entries[0].isIntersecting);
  
  },options)
}
ngAfterViewInit(){
  this.el.nativeElement.before(this.scrollWhatcher);
  this.navObserver.observe(this.scrollWhatcher);
  this.el.nativeElement.classList.add('out');

}
}