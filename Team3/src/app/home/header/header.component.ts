import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignInComponent } from '../sign-in/sign-in.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {




  // openModal(){
  //   alert("in openModal")
  //   this.router.navigateByUrl("/home/toSignIn")
  // }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  openLoginModal() {
    this.bsModalRef = this.modalService.show(SignInComponent);
  }




}
