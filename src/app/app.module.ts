import { ChatComponent } from './chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
  MatButtonModule, MatListModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DbService } from '../service/db.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../service/notification.service';
import { InspirationComponent } from './chat/inspiration/inspiration.component';
import { AppRouting } from './app.routing';

export const config = {
  apiKey: 'AIzaSyCEabkv49sETIWLxxv1HADrLoKjs8jOYKo',
  authDomain: 'group-talk-tesla.firebaseapp.com',
  databaseURL: 'https://group-talk-tesla.firebaseio.com',
  projectId: 'group-talk-tesla',
  storageBucket: 'group-talk-tesla.appspot.com',
  messagingSenderId: '244878264637'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    InspirationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    AppRouting,
  ],
  providers: [
    DbService,
    AngularFireAuth,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
