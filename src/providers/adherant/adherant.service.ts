import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import { Adherant } from '../model/adherant';


@Injectable()
export class AdherantSerivce {


  constructor(private db: AngularFireDatabase) {

  }

  getAll () : Observable<Adherant[]> {
    return this.db.list<Adherant>('adherants').valueChanges();
  }


  send (ad: Adherant) {
     this.db.list<Adherant>('adherants').push(ad);
  }

}
