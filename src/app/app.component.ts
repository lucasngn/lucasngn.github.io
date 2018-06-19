import { DbService } from './../service/db.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(db: AngularFireDatabase, public dbService: DbService, private routerService: Router) {
  }

  ngOnInit() {
    this.dbService.isAuthenticated().subscribe(res => {
      if (res !== null) {
        this.dbService.showChat = 'true';
        const index = res.email.indexOf('@');
        this.dbService.user = res.email.slice(0, index);
      } else {
        this.dbService.showChat = 'false';
      }
    });
  }

}
