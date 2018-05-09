import {Component, OnInit} from '@angular/core';
import { AdherantSerivce } from '../../providers/adherant/adherant.service';
import { Adherant } from '../../providers/model/adherant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  isShowAddView: boolean;
  adherants: Adherant[];

  constructor(private adherantService: AdherantSerivce) {

  }




  ngOnInit(): void {
    this.isShowAddView = false;
    this.adherantService.getAll().subscribe
    (
      (adherants: Adherant[]) => this.adherants = adherants
    );
  }

  doSend(ad: Adherant) {
    this.adherantService.send(ad);
  }

  showAdd(){
    this.isShowAddView = true;
  }

  showList(){
    this.isShowAddView = false;
  }

}
