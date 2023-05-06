import { Component , ViewChild, ElementRef,ChangeDetectorRef} from '@angular/core';
import { Icons } from './shared/icons';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { iconAnim } from './animations/navbarIconsAnim';
import { routeAnim } from './animations/routeAnimation';
import { enterFromLeft } from './animations/buttonsAnimation';
import { TranslationService } from './services/translation.service';
import { STRINGS } from './shared/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[iconAnim(),routeAnim(),enterFromLeft()]
})

export class AppComponent {
  @ViewChild ('outlet') outlet: RouterOutlet;
  STRINGS = STRINGS;
  title = 'portfolio';
  home = Icons.home;
  whatsapp = Icons.faWhatsapp;
  routeIcon="home";
  routeLabel="Home";
  isOpen = true;
  contacts = Icons.contacts;
  lan:string = "it";
  langImage: string = './assets/images/italian_flag.png';
  langImages={
    it:'./assets/images/italian_flag.png',
    en:'./assets/images/great_britain_flag.png'
  }
  constructor(
    public el: ElementRef,
    public cdRef:ChangeDetectorRef,
    private translationService: TranslationService,
    private router: Router,
    ){
      this.setNavRoute()
  }
  ngOnInit(){
    let language = localStorage.getItem('language');
    if(language){
      this.lan = language;
      this.langImage = this.langImages[language];
    }
  }
  ngAfterViewInit(){
    this.prepareRoute(this.outlet)
    this.cdRef.detectChanges();
  }
  change(){
    this.translationService.setLang(this.lan)
    localStorage.setItem('language', this.lan )
    window.location.reload()
  }
  prepareRoute(outlet: RouterOutlet){
    if (outlet.isActivated) {    
      return outlet.activatedRouteData["tab"]
    }
    else{
      return 1;
    }
  }
  setNavRoute(outlet?: RouterOutlet){
    if(outlet){
      if (outlet.isActivated) {
        this.routeIcon = outlet.activatedRouteData['navbar']["icon"];
        this.routeLabel = outlet.activatedRouteData['navbar']["label"];      
      }
    }
    else{
      this.router.events.subscribe(data => {
        if (data instanceof ActivationStart) {
          this.routeIcon = data.snapshot.data['navbar']['icon'];
          this.routeLabel = data.snapshot.data['navbar']['label'];
          
        }
      })
    }
  }
}
