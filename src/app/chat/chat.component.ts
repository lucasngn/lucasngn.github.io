import { DbService } from './../../service/db.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../../service/notification.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    chats$;
    text = '';
    sendText;
    inspireText = '';
    textBoxWidth = 300;
    numberOfConv = 6;
    constructor(public db: AngularFireDatabase, public dbService: DbService, public notification: NotificationService) {
    }

    ngOnInit() {
        console.log(window.innerHeight, window.innerWidth);
        this.textBoxWidth = window.innerWidth - 24 * 2 - 25;
        this.numberOfConv = window.innerHeight < 750 ? 6 : 10;
        this.sendText = this.db.list('myChat');
        this.chats$ = this.db.list('myChat', ref => ref.limitToLast(this.numberOfConv)).valueChanges();
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
                this.notification.success('Come back soon');
                this.dbService.showChat = 'false';
            });
    }

    inspire(text: string) {
        this.notification.showInspiration = true;
        this.inspireText = text;

    }
}
