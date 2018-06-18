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
    constructor(private dbService: DbService, private notification: NotificationService) { }

    ngOnInit(): void {
    }

    login() {
        if (!this.email || !this.password) {
            this.notification.error('Who are you?!');
        }
        this.dbService.login(this.email, this.password)
        .then(res => {
            this.dbService.isAuth = true;
            this.dbService.user = this.email.toLocaleLowerCase();
            if (res.additionalUserInfo.isNewUser === true) {
                this.notification.success('Welcome stranger!');
            } else {
                this.notification.success('Make yourself at home!');
            }
        }).catch(err => {
            this.notification.error(err.message);
        });
    }

    signup() {
        this.dbService.signup(this.email, this.password)
        .then(res => {
            this.dbService.isAuth = true;
            if (res.additionalUserInfo.isNewUser === true) {
                this.notification.success('Welcome stranger!');
            } else {
                this.notification.success('Make yourself at home!');
            }
        })
        .catch(err => {
            this.notification.error(err.message);
        });
    }
}
