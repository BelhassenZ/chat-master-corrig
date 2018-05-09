import { Component, Input } from '@angular/core';
import { Adherant } from '../../providers/model/adherant';

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {

  //c'est un input
  @Input() adherants: Adherant[];
  private _textFilter:string;
  @Input() filteredAdherants: Adherant[];

  get textFilter():string {
    return this._textFilter;
  }

  set textFilter(text:string) {
    this.filteredAdherants= text ? this.adherants.filter((ad:any) => ad.code.indexOf(text) !== -1) : this.adherants;
    this._textFilter=text;
  }

  constructor() {
  }

}
