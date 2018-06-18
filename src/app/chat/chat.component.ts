import { DbService } from './../../service/db.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../../service/notification.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {
    chats$;
    text = '';
    sendText;
    inspireText = 'somethingg';
    constructor(db: AngularFireDatabase, public dbService: DbService, public notification: NotificationService) {
        this.chats$ = db.list('myChat', ref => ref.limitToLast(6)).valueChanges();
        this.sendText = db.list('myChat');
    }

    send(type = '') {
        if (this.text.trim()) {
            this.sendText.push({
                sender: this.dbService.user,
                text: this.text,
                type: type
            });
            this.text = '';
        }
    }

    logout() {
        this.dbService.logout()
            .then(res => {
                this.notification.success('Log out successfully');
                this.dbService.isAuth = false;
            });
    }

    inspire(text: string) {
        this.notification.showInspiration = true;
        this.inspireText = text;

    }
}
