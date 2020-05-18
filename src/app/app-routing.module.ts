import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './containers/landing-page.component';
import { RegistrationNamePageComponent } from './containers/registration-name-page.component';
import { TaskCategoriesPageComponent } from './containers/task-categories-page.component';
import { OptionsPageComponent } from './containers/options-page.component';


const routes: Routes = [ 
  {  path: '', component: LandingPageComponent},
  { path: 'registration-name', component: RegistrationNamePageComponent},
  { path: 'task-categories', component: TaskCategoriesPageComponent},
  { path: 'options', component: OptionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
