import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent {
    question: Question = new Question(
        'this is a new question about android',
        "hey, I have a new question about a new aplication that I'm building for Android",
        new Date(),
        'devicon-android-plain'
    );
}
