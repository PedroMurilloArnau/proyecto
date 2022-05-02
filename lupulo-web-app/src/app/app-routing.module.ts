import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { GaneComponent } from './game/gane.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TastingComponent } from './tasting/tasting.component';
import { TastingCalendarComponent } from './tasting/tasting-calendar/tasting-calendar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthGuard]},
  { path: 'tasting', component: TastingComponent, canActivate: [AuthGuard]},
  { path: 'game', component: GaneComponent, canActivate: [AuthGuard]},
  { path: 'purchase', component: PurchaseComponent, canActivate: [AuthGuard]},
  { path: 'calendar', component: TastingCalendarComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo : 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
