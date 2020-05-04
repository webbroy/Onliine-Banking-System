import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { MainpageComponent } from '../app/mainpage/mainpage.component';
import { RegisterUserComponent } from '../app/register-user/register-user.component';


const routes: Routes = [
  {path: 'register-user', component:RegisterUserComponent},
  {path: 'mainpage', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
