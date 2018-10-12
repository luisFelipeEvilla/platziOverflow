import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

const p = new Question(
    'How i can re-use a component for Android?',
    'see this is my question',
    new Date,
    'devicon-android-plain'
);

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i {
            font-size: 48px;
        }

        i.help {
            width: 48px !important ;
            heigth: 48px !important ;
            padding 0 !important ;
            font-size: 48px !important ;
        }
    `]
})
export class QuestionListComponent implements OnInit {
    questions: Question[] = new Array(10).fill(p);

    ngOnInit(){
    
    }
}
