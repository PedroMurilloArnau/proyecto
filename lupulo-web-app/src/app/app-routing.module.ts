import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { GaneComponent } from './gane/gane.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TastingComponent } from './tasting/tasting.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'tasting', component: TastingComponent},
  { path: 'game', component: GaneComponent},
  { path: 'purchase', component: PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
