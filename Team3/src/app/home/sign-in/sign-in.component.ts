import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

declare const window:any;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  constructor(private fb:FormBuilder, public modalRef: BsModalRef){}


  signInForm:FormGroup;

  ngOnInit(): void {
    this.signInForm=this.fb.group({
      username:[],
      password:[]
    })
  }

  submitForm(){
    console.log(this.signInForm.value);
    
  }

  
  

}
