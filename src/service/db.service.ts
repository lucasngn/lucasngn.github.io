import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class DbService {
    public showChat = 'init';
    chats$;
    text = '';
    sendText;
    public user = '';
    public isAuth = false;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.chats$ = db.list('myChat', ref => ref.limitToLast(5)).valueChanges();
        this.sendText = db.list('myChat');
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

    signup(email: string, password: string) {
        return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
    }

    isAuthenticated() {
        return (this.afAuth.authState);
    }
}
