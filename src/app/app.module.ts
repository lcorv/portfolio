import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarDirective } from './directives/navbar.directive';
import { WorksComponent } from './works/works.component';
import { ButtonDirective } from './directives/button.directive';
import { SkillsComponent } from './skills/skills.component';
import { BounceDirective } from './directives/bounce.directive';
import { TextDirective } from './directives/text.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    NavbarDirective,
    WorksComponent,
    ButtonDirective,
    SkillsComponent,
    BounceDirective,
    TextDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
