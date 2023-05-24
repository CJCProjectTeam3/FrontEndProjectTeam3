import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EnquiryFormServiceService {

  constructor(private http: HttpClient) { }

  postEnquiryForm(enquiry: any) {
    return this.http.post("http://localhost:7777/postEnquiryData", enquiry);
  }

  showEnquiryDetails() {
    return this.http.get("http://localhost:7777/getAllEnquiryData");
  }

  showEnquiryDetailsById(enquiryId: number) {
    return this.http.get("http://localhost:7777/getEnquiryById/" + enquiryId);
  }

}
