import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home',data:{tab:1, navbar:{icon:'home',label:'Home'}}},
  { component: ContactsComponent, path:'contacts',data:{ tab:2, navbar:{icon:'person',label:'Contacts'}}},
  { component: SkillsComponent, path:'skills',data:{ tab:3, navbar:{icon:'done_all',label:'Skills'}}},
  { component: WorksComponent, path: 'works',data:{tab:4, navbar:{icon:'settings',label:'Works'}}},

  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true, scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
