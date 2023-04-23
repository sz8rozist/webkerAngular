import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';
const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "signup", component: SignupComponent},
  {path: "home", 
  loadChildren: () => HomeModule},
  {path: '**', redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
