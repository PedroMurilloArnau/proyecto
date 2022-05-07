import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent, DialogOverviewExampleDialog } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TastingComponent } from './tasting/tasting.component';
import { GaneComponent } from './game/gane.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddBeerComponent } from './catalogue/add-beer/add-beer.component';
import { NewsComponent } from './catalogue/news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http';
import { TastingCalendarComponent } from './tasting/tasting-calendar/tasting-calendar.component';
import { MenuComponent } from './navegation/menu/menu.component';
import { SidenavComponent } from './navegation/sidenav/sidenav.component';
import { TasteComponent } from './catalogue/news/taste/taste.component';
import { NewTastingComponent } from './tasting/new-tasting/new-tasting.component';
import { AllTastingComponent } from './tasting/all-tasting/all-tasting.component';
import { YourTastingComponent } from './tasting/your-tasting/your-tasting.component';
import { NewComponent } from './tasting/documentation/new/new.component';
import { DocumentationComponent } from './tasting/documentation/documentation.component';
import { AllDocumentationComponent } from './tasting/documentation/all-documentation/all-documentation.component';
import { IgxCarouselModule,IgxListModule } from "igniteui-angular";
import { CurrentTastingComponent } from "./tasting/current-tasting/current-tasting.component";
import { StopTastingComponent } from "./tasting/current-tasting/sotop-tasting-component";
import { FinishTastingComponent } from "./tasting/current-tasting/finish-tasting-component";
import { TastingTasterComponent } from "./tasting/tasting-taster/tasting-taster.component";
import { YourGamesComponent } from "./game/your-games/your-games.component";
import { NewQuestionComponent } from "./game/new-question/new-question.component";
import { NewGameComponent } from "./game/new-game/new-game.component";
import { InfoGameComponent } from "./game/info-game/info-game.component";
import { CurrentGameComponent } from "./game/new-game/current-game/current-game.component";
import { AnswersComponent } from './game/new-question/answers/answers.component';



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
    WelcomeComponent,
    TastingCalendarComponent,
    MenuComponent,
    SidenavComponent,
    DialogOverviewExampleDialog,
    TasteComponent,
    NewTastingComponent,
    AllTastingComponent,
    YourTastingComponent,
    NewComponent,
    DocumentationComponent,
    AllDocumentationComponent,
    CurrentTastingComponent,
    StopTastingComponent,
    FinishTastingComponent,
    TastingTasterComponent,
    InfoGameComponent,
    NewGameComponent,
    NewQuestionComponent,
    YourGamesComponent,
    CurrentGameComponent,
    AnswersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    IgxCarouselModule,
    IgxListModule,
    

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [StopTastingComponent,FinishTastingComponent]
})
export class AppModule { }
