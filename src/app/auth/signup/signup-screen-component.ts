import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html',
    styles: [`  
        mat-hint strong {
            color: #cc0000;
        }
    `]
})

export class SignupScreenComponent implements OnInit{
    signupForm: FormGroup;
    hide = true;
    passwordNotMatch = false;
    $passConfirm;

    ngOnInit() {
        this.signupForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required),
            passwordConfirmation: new FormControl(null, Validators.required)
        });
        this.$passConfirm = document.getElementById('passwordConfirmation');
    }

    onSubmit() {
        if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.passwordConfirmation) {
            const { firstName, lastName, email, password } = this.signupForm.value;
            const user = new User(email, password, firstName, lastName);
            this.$passConfirm.style.marginBottom = '0';
            this.passwordNotMatch = false;
            console.log(user);
        } else if (this.signupForm.value.password !== this.signupForm.value.passwordConfirmation) {
            this.$passConfirm.style.marginBottom = '10px';
            this.passwordNotMatch = true;
        }
    }

}