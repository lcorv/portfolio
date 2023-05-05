import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {
  @Input('pres') pres:any[][];
  @Input('delay') delay:number;
  constructor(
    private el: ElementRef
  ) { }
  ngOnInit(){
    this.animateText()
  }
  animateText(){
    if (this.el.nativeElement){
      for(let line of this.pres){
        let div = document.createElement('div');
        for(let letter of line){
          let span = document.createElement('span');
          span.innerHTML = letter;
          span.className = "animated-span";
          span.style.animation = `spread 1s ${this.delay}s forwards`;
          this.delay+=0.1;
          div.appendChild(span);
          setTimeout(()=>{
            span.style.animation = '';
            span.style.opacity = '1';
            span.addEventListener('mouseenter', ()=>{
              span.classList.add('bounce');
              setTimeout(()=>{
                span.classList.remove('bounce')
              },1000)
            });
  
          }, 1000 + this.delay * 1000)
        }
        this.el.nativeElement.appendChild(div)
      }
    }
  }
}
