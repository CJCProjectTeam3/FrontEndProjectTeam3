import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationServiceService {

  constructor(private http: HttpClient) { }

  postLoanAppFromRM(loanApp: any) {
    return this.http.post
  }

}
