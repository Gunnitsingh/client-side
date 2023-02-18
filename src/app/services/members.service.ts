import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/membet';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }


getMembers(){
  return  this.http.get<Member[]>(this.baseUrl+'user')
}

getMember(username:string){
  return this.http.get<Member>(this.baseUrl+'user/'+username)
}



}