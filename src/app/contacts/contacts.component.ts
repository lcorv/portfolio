import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STRINGS } from '../shared/translations';
import { TranslationService } from '../services/translation.service';
import { enterFromBottom,enterFromLeft,enterFromRight } from '../animations/enterAnimations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [enterFromBottom(500),enterFromLeft(1000),enterFromRight(500)]
})
export class ContactsComponent implements OnInit {
  init = false;
  STRINGS = STRINGS;
  lang:string = 'en';
  email:string = 'l.corvino@live.it'
  emailLink: string = '';
  wmsg:string = '';
  title = [Array.from(STRINGS[0].contactMe[this.lang]),Array.from(STRINGS[0].theWayYouLike[this.lang])];
  delay:number = 0;
  whatsappForm: FormGroup;
  contactForm: FormGroup;
  @ViewChild('cForm') feedbackFormDirective;
  formErrors= {
    'firstname': '',
    'subject': '',
    'message': '',
    'email': '',
  };
  whatsappErrors= {
    'message': '',
  };
  validationMessages = {
    'firstname': {
      'required': this.STRINGS[0].firstNameReq[this.lang],
      'minlength': this.STRINGS[0].firstNameMin[this.lang],
      'maxlength': this.STRINGS[0].firstNameMax[this.lang]
    },
    'subject': {
      'required': this.STRINGS[0].subjectReq[this.lang],
      'minlength': this.STRINGS[0].subjectMin[this.lang],
      'maxlength': this.STRINGS[0].subjectMax[this.lang],
    },
    'email': {
      'required': this.STRINGS[0].emailReq[this.lang],
      'email': this.STRINGS[0].emailFormat[this.lang]
    },
    'message': {
      'required': this.STRINGS[0].messageFormErr[this.lang],
    },
  }
  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnChanges(){
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.init=true;
    })
  }
  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if(language && language!=this.lang){
      this.lang = language;
      this.validationMessages = {
        'firstname': {
          'required': this.STRINGS[0].firstNameReq[this.lang],
          'minlength': this.STRINGS[0].firstNameMin[this.lang],
          'maxlength': this.STRINGS[0].firstNameMax[this.lang]
        },
        'subject': {
          'required': this.STRINGS[0].subjectReq[this.lang],
          'minlength': this.STRINGS[0].subjectMin[this.lang],
          'maxlength': this.STRINGS[0].subjectMax[this.lang],
        },
        'email': {
          'required': this.STRINGS[0].emailReq[this.lang],
          'email': this.STRINGS[0].emailFormat[this.lang]
        },
        'message': {
          'required': this.STRINGS[0].messageFormErr[this.lang],
        },
      }
      this.title = [Array.from(STRINGS[0].contactMe[this.lang]),Array.from(STRINGS[0].theWayYouLike[this.lang])];
    }

    this.createForm()
  }
  onSubmit(media){
    if(media == 'email'){
    let form = this.contactForm.value;
    this.emailLink = `mailto: ${this.email}?&subject=${form.subject}&body=${form.message}&body=${form.firstname}`
    console.log(this.emailLink)
    location.href = this.emailLink
  }
    if(media=='whatsapp'){
      let form = this.whatsappForm.value;
      this.wmsg = `https://wa.me/3801010977?text=${form.message}`;
      console.log(this.wmsg)
      open( this.wmsg);
    }
  }
  text(){
    return this.title
  }
  createForm(){

    this.contactForm = this.fb.group({
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    message: ['',[Validators.required]],

  });
  this.whatsappForm = this.fb.group({
    message: ['',[Validators.required]]
  })

  this.contactForm.setErrors({ 'invalid': true });
  this.contactForm.valueChanges
    .subscribe(data => this.onValueChanged(this.contactForm, this.formErrors,data));
  this.whatsappForm.valueChanges
    .subscribe(data => this.onValueChanged(this.whatsappForm,this.whatsappErrors,data));
  this.onValueChanged(this.contactForm,this.formErrors); //(re)set form validation messages
  this.onValueChanged(this.whatsappForm,this.whatsappErrors); //(re)set form validation messages
}
onValueChanged(form:FormGroup,formErrors,data?:any ){
  if (!this.contactForm) { return;}
  for (const field in formErrors) {
    if(formErrors.hasOwnProperty(field)) {
      //clear previous error validationMessages
      formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for(const key in control.errors){
          if(control.errors.hasOwnProperty(key)){
            formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

}
