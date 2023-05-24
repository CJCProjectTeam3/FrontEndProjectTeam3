import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminLoginServiceService } from 'src/app/services/admin-login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private router: Router, private addminService: AdminLoginServiceService) { }


  adminLoginForm: FormGroup;
  adminDetails: any;

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      username: [],
      password: [],
      adminType: []
    })
  }

  // submitForm() {

  //   this.addminService.getAdminDetails(this.adminLoginForm.value).subscribe((admin: any) => {
  //     console.log(admin.adminType);
  //     if (admin.adminType == 'rm') { this.router.navigateByUrl("/dashHome/rm"); }
  //     else if (admin.adminType == 'io') { this.router.navigateByUrl("/dashHome/io"); }
  //     else if (admin.adminType == 'do') { this.router.navigateByUrl("/dashHome/do"); }
  //     else if (admin.adminType == 'po') { this.router.navigateByUrl("/dashHome/po"); }
      
  //   });
  // }

  submitForm(){

    if(this.adminLoginForm.controls['username'].value == "rm"  && this.adminLoginForm.controls['password'].value == "rm" ){
      localStorage.setItem("userType", "RM");
      this.router.navigateByUrl("/dashHome/rm");
    }
    else if(this.adminLoginForm.controls['username'].value == "io"  && this.adminLoginForm.controls['password'].value == "io" ){
      localStorage.setItem('userType', 'IO');
      this.router.navigateByUrl('/dashHome/io');
    }

    else if(this.adminLoginForm.controls['username'].value == "do"  && this.adminLoginForm.controls['password'].value == "do" ){
      localStorage.setItem("userType", "DO");
      this.router.navigateByUrl("/dashHome/do")
    }

    else if(this.adminLoginForm.controls['username'].value == "po"  && this.adminLoginForm.controls['password'].value == "po" ){
      localStorage.setItem("userType", "PO");
      this.router.navigateByUrl("/dashHome/po")
    }


  }
}
