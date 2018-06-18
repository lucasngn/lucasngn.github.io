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

    ngOnInit(): void { }

    unspire () {
        this.notification.showInspiration = false;
    }
}
