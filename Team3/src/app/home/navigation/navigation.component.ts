import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router, private modalService:BsModalService){}

  ngOnInit(): void {
  }


  adminloginModal: BsModalRef;
  openAdminLoginModal(){
    this.adminloginModal=this.modalService.show(AdminLoginComponent);
  }

  



}
