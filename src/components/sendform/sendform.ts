import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Adherant } from '../../providers/model/adherant';

/**
 * Generated class for the SendformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sendform',
  templateUrl: 'sendform.html'
})
export class SendformComponent implements OnInit {

  
  @Output() onSend = new EventEmitter<Adherant>();

  ad: Adherant;

  constructor() {

  }

  ngOnInit(): void {
    this.ad = new Adherant();
  }

  addAd() {
    let temp = new Adherant();
    temp.code = this.ad.code;
    temp.nom = this.ad.nom;
    temp.dateDeb = this.ad.dateDeb;
    temp.dateFin = this.ad.dateFin;
    this.onSend.emit(temp);
  }

}
