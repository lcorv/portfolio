import { Component } from '@angular/core';
import { STRINGS } from '../shared/translations';
import { enterFromBottom } from '../animations/buttonsAnimation';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
  animations: [enterFromBottom(0)]
})
export class ContactmeComponent {
STRINGS = STRINGS;
lang = 'it';
init: boolean = false;
ngOnInit(){

}
ngAfterViewInit(){
  setTimeout(()=>{
    this.init = true;
  })
}
}
