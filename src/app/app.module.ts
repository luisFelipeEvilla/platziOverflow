import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import 'hammerjs'

import { QuestionDetailComponent } from './questions/question.detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';

import { MomentModule } from'ngx-moment';
import 'moment/locale/es';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
