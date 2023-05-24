import { Component, OnInit } from '@angular/core';
import { OfficerTypes } from '../../model/officer-types';

@Component({
  selector: 'app-dash-sidebar',
  templateUrl: './dash-sidebar.component.html',
  styleUrls: ['./dash-sidebar.component.scss']
})
export class DashSidebarComponent implements OnInit {

  userType:string;
  roles:OfficerTypes[]

  ngOnInit (): void {
    this.userType = localStorage.getItem('userType');
    this.roles = OfficerTypes.menus
  }




}
