import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../service/notification.service';

@Component({
    selector: 'app-inspiration',
    templateUrl: './inspiration.component.html',
    styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
    @Input() text: string;
    constructor(public notification: NotificationService) { }
    fadeClass = 'fadein';
    ngOnInit(): void { }

    unspire() {
        this.fadeClass = 'fadeout';
        setTimeout(() => {
            this.notification.showInspiration = false;
            this.fadeClass = 'fadein';
        }, );
    }
}
