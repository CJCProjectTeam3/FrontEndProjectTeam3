import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EnquiryFormServiceService } from 'src/app/services/enquiry-form-service.service';
import { PassingCibilEnquiryIdService } from 'src/app/services/passing-cibil-enquiry-id.service';

@Component({
  selector: 'app-cibil-check',
  templateUrl: './cibil-check.component.html',
  styleUrls: ['./cibil-check.component.scss']
})
export class CibilCheckComponent {


  constructor(public cibilRef: BsModalRef, private enqService: EnquiryFormServiceService,
    public passCibil: PassingCibilEnquiryIdService, private fb: FormBuilder) {

  }

  enqData: any;

  variable1: any;

  checkCibilForm: FormGroup;

  ngOnInit() {
    this.variable1 = this.passCibil.enquiryId;
    console.log(this.variable1 + 'abc');
    this.checkCibilForm = this.fb.group({
      enquiryId: [],
      fullName: [],
      address: [],
      age: [],
      panNumber: [],
      contact: [],
      cibilScore: []
    })

  }

  checkCibil(): number {
    const min = 100; // Minimum value (inclusive)
    const max = 999; // Maximum value (inclusive)

    return Math.floor(Math.random() * (max - min + 1)) + min;

  }

  randomNumber: number;

  generateNumber(): void {
    this.randomNumber = this.checkCibil();
    console.log(this.randomNumber);
  }

  getEnquiryById(enquiryId: number) {
    console.log(enquiryId)
    this.enqService.showEnquiryDetailsById(enquiryId).subscribe((data: any) => {
      this.enqData = data.body;
    })

  }

  onClickApproved() {
    //this.enqService.postEnquiryForm(this.checkCibilForm.value).subscribe();
    console.log(this.checkCibilForm.value);
  }



}
