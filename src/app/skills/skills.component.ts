import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animateText } from '../animations/animatedText';
import { enterFromLeft } from '../animations/enterAnimations';
import { STRINGS } from '../shared/translations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [enterFromLeft(500)]
})
export class SkillsComponent implements OnInit {
  lang = 'en';
  STRINGS = STRINGS;
  title = [Array.from(this.STRINGS[0].my4[this.lang]), Array.from(this.STRINGS[0].skills[this.lang])];
  delay = 0;
  init = false;
  constructor(
    public cdRef:ChangeDetectorRef
  ) { }
  animateText = animateText;
  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if (language && language!=this.lang){
      this.lang = language;
      this.title = [Array.from(this.STRINGS[0].my4[this.lang]), Array.from(this.STRINGS[0].skills[this.lang])];
    }
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.init = true;
    })
  }
  ngOnDestroy(){
  }

}
