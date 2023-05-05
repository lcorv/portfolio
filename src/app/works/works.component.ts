import { Component, OnInit } from '@angular/core';
import { enterFromBottom,enterFromLeft } from '../animations/enterAnimations';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { WORKS } from '../shared/works';
import { STRINGS } from '../shared/translations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations:[enterFromBottom(500),enterFromLeft(500)]
})
export class WorksComponent implements OnInit {
  faGit = faGithub;
  STRINGS = STRINGS;
  init = false;
  lang = 'en';
  title = [Array.from(STRINGS[0].my2[this.lang]), Array.from(STRINGS[0].works[this.lang])];
  works = WORKS;
  delay = 0;
  constructor() { }

  ngOnInit(): void {
      setTimeout(()=>{
        this.init = true;
      })
      let language = localStorage.getItem('language');
      if(language && language!=this.lang){
        this.lang = language;
        this.title = [Array.from(STRINGS[0].my2[this.lang]), Array.from(STRINGS[0].works[this.lang])];
      }
  }
 

}
