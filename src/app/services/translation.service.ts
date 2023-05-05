import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  actualLanguage:BehaviorSubject<string> = new BehaviorSubject<string>('it');
  language = this.actualLanguage.asObservable()
  constructor() { }
  setLang(lang:string){
    this.actualLanguage.next(lang);
  }
  getLang(){
    return this.language
  }
}
