import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TastingComponent } from './tasting/tasting.component';
import { GaneComponent } from './gane/gane.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddBeerComponent } from './catalogue/add-beer/add-beer.component';
import { NewsComponent } from './catalogue/news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CatalogueComponent,
    TastingComponent,
    GaneComponent,
    PurchaseComponent,
    AddBeerComponent,
    NewsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
