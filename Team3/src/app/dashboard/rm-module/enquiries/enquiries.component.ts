
import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EnquiryFormServiceService } from 'src/app/services/enquiry-form-service.service';
import { CibilCheckComponent } from '../cibil-check/cibil-check.component';
import { PassingCibilEnquiryIdService } from 'src/app/services/passing-cibil-enquiry-id.service';


@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss'],

})

export class EnquiriesComponent {

  constructor(private enqService: EnquiryFormServiceService, public modelservice: BsModalService, public passService: PassingCibilEnquiryIdService) { }

  allEnquires: any[];

  ngOnInit() {
    console.log('call')
    this.enqService.showEnquiryDetails().subscribe((data: any) => {
      this.allEnquires = data.body;
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

  cibilpopupModel: BsModalRef;
  onClickCibilCheck(id: number) {
    this.cibilpopupModel = this.modelservice.show(CibilCheckComponent);
    this.passService.enquiryId = id;
    console.log(id);
  }
}