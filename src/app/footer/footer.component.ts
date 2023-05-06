import { Component } from '@angular/core';
import { STRINGS } from '../shared/translations';
import { Icons } from '../shared/icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
lan = 'it';
STRINGS = STRINGS;
whatsapp= Icons.faWhatsapp;
ngOnInit(){
  let language = localStorage.getItem('language');
  if(language){
    this.lan = language;
  }
}
}
