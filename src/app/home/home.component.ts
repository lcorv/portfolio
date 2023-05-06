import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { enterFromBottom, enterFromLeft } from '../animations/buttonsAnimation';
import { animateText } from '../animations/animatedText';
import { STRINGS } from '../shared/translations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [enterFromBottom(1000),enterFromLeft()]
})
export class HomeComponent implements OnInit {
STRINGS = STRINGS;
animateText = animateText;
lang = 'it';
presentation:string[][] = [Array.from(STRINGS[0].hello[this.lang]+','),Array.from(STRINGS[0].iM[this.lang]),Array.from('Luca Corvino')]
delay:number = 0;
init = false;
  constructor(
    public cdRef:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if (language && language!=this.lang){
      this.lang = language;
      this.presentation = [Array.from(STRINGS[0].hello[this.lang]+','),Array.from(STRINGS[0].iM[this.lang]),Array.from('Luca Corvino')]
    }
  }
  ngAfterViewInit(){  
    setTimeout(() => {
      this.init = true;
    });
  }
  ngOnDestroy(){
  }

}
