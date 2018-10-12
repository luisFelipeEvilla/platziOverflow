import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import 'hammerjs'

import { QuestionDetailComponent } from './questions/question.detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninScreenComponent } from './auth/singin/signin-screen.component';
import { SignupScreenComponent } from './auth/signup/signup-screen-component';

import { MomentModule } from'ngx-moment';
import 'moment/locale/es';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
