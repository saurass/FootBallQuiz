import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuestionService} from './question.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HostListener } from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {SingleComponent} from './single/single.component';
import {MultipleComponent} from './multiple/multiple.component';
import {ArrangeComponent} from './arrange/arrange.component';
import {AgreementComponent} from './agreement/agreement.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {HomeGuard} from './home.guard';
import { MatchComponent } from './match/match.component';
import { FibComponent } from './fib/fib.component';
import { FreetextComponent } from './freetext/freetext.component';
import { PictureComponent } from './picture/picture.component';
import { GetansDirective } from './getans.directive';
import { EndComponent } from './end/end.component';
export const routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: AgreementComponent
  },
  {
    path: '1',
    canActivate: [AuthGuard],
    component: SingleComponent
  },
  {
    path: '2',
    canActivate: [AuthGuard],
    component: MultipleComponent
  },
  {
    path: '3',
    canActivate: [AuthGuard],
    component: ArrangeComponent
  },
  {
    path: '4',
    canActivate: [AuthGuard],
    component: MatchComponent
  },
  {
    path: '5',
    canActivate: [AuthGuard],
    component: FibComponent
  },
  {
    path: '6',
    canActivate: [AuthGuard],
    component: FreetextComponent
  },
  {
    path: '7',
    canActivate: [AuthGuard],
    component: PictureComponent
  },
  {
    path: '8',
    canActivate: [AuthGuard],
    component: SingleComponent
  },
  {
    path: '9',
    canActivate: [AuthGuard],
    component: SingleComponent
  },
  {
    path: '10',
    canActivate: [AuthGuard],
    component: SingleComponent
  },
  {
    path: 'submit',
    canActivate: [AuthGuard],
    component: EndComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SingleComponent,
    MultipleComponent,
    ArrangeComponent,
    AgreementComponent,
    MatchComponent,
    FibComponent,
    FreetextComponent,
    PictureComponent,
    GetansDirective,
    EndComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [QuestionService, AuthService, AuthGuard, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
