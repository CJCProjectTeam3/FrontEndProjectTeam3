import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EnquiryFormServiceService } from 'src/app/services/enquiry-form-service.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent {

  constructor(public enqRef: BsModalRef, private enqFormGroup: FormBuilder, private enquiryService: EnquiryFormServiceService) {
  }

  enquiryForm: FormGroup;

  ngOnInit() {
    this.enquiryForm = this.enqFormGroup.group({
      fullName: [],
      address: [],
      age: [],
      panNumber: [],
      contact: []
    })

  }

  onSubmitEnquiryForm() {
    console.log('submit')
    console.log(this.enquiryForm.value)
    this.enquiryService.postEnquiryForm(this.enquiryForm.value).subscribe();
  }


}
