import { DbService } from './../../service/db.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    quote;
    quotes = ['live simple', 'life goes on', 'listen', 'be bold', 'yes, you can', 'you are someone\'s sunshine',
        'appreciate a good scotch', 'confidence is sexy', 'the angry lose', 'aim for the sun', 'ask more than you answer',
        'buy quality tools', 'every hat should serve a purpose', 'compliment her shoes', 'give firm handshake'];
    constructor(private dbService: DbService, private notification: NotificationService) { }

    ngOnInit(): void {
        this.changeQuote();
    }

    login() {
        if (!this.email || !this.password) {
            this.notification.error('Who are you?!');
        }
        this.dbService.login(this.email, this.password)
            .then(res => {
                this.dbService.isAuth = true;
                this.notification.success('Make yourself at home!');
            }).catch(err => {
                let errMes = 'Do I know you?!';
                if (err.code === 'auth/wrong-password') {
                    errMes = 'Wrong password Einstein...';
                } else if (err.code = 'auth/too-many-requests') {
                    errMes = 'Maybe take 5 minutes to clear your mind';
                } else if (err.code === 'auth/user-not-found') {
                    errMes = 'I\'m not sure I\'ve seen this email before';
                }
                this.notification.error(errMes);
            });
    }

    signup() {
        if (!this.email || !this.password) {
            this.notification.error('Who are you?!');
        }
        this.dbService.signup(this.email, this.password)
            .then(res => {
                this.dbService.isAuth = true;
                this.notification.success('Welcome stranger!');
            })
            .catch(err => {
                this.notification.error(err.message);
            });
    }

    changeQuote() {
        const random = Math.floor(Math.random() * this.quotes.length);
        this.quote = this.quotes[random];
    }
}
