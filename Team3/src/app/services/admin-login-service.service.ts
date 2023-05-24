import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {

  constructor(private http:HttpClient) { }

  getAdminDetails(a:any){
    alert(a.username)   
    return this.http.get("http://localhost:7777/adminlogin/"+a.username+"/"+a.password +"/"+a.adminType);
  }
}
