import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{

constructor(public modalRef:BsModalRef, private fb:FormBuilder, private router:Router){}


  adminLoginForm:FormGroup;

  ngOnInit(): void {
    this.adminLoginForm=this.fb.group({
      username:[],
      password:[]
    })
  }

  submitForm(){
    
    if(this.adminLoginForm.controls['username'].value == "re"  && this.adminLoginForm.controls['password'].value == "re" ){
      localStorage.setItem("userType", "RM");
      this.router.navigateByUrl("/dashHome/RM");
    }
    else if(this.adminLoginForm.controls['username'].value == "io"  && this.adminLoginForm.controls['password'].value == "io" ){
      localStorage.setItem('userType', 'IO');
      this.router.navigateByUrl('/dashHome/IO');
    }

    else if(this.adminLoginForm.controls['username'].value == "do"  && this.adminLoginForm.controls['password'].value == "do" ){
      localStorage.setItem("userType", "DO");
      this.router.navigateByUrl("/dashHome/DO")
    }

    else if(this.adminLoginForm.controls['username'].value == "po"  && this.adminLoginForm.controls['password'].value == "po" ){
      localStorage.setItem("userType", "PO");
      this.router.navigateByUrl("/dashHome/PO")
    }

    
  }
}
