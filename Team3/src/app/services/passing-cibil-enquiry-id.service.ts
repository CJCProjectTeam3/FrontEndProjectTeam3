import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassingCibilEnquiryIdService {

  constructor(private http: HttpClient) { }

  public enquiryId: number;



}
