import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { User } from './_models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userData:any
  constructor (private httpService:HttpServiceService, private accountService:AccountService){}

  ngOnInit(): void {
 this.getUsers();
 this.setCurrentUser();
  }

  getUsers(){
    this.httpService.getUsers().subscribe(data=>{
      this.userData = data
          });
  }

  setCurrentUser(){
    const userStr =localStorage.getItem('user');
    if(!userStr)return;
    const user:User = JSON.parse(userStr);
    this.accountService.setCurrentUser(user);
  }
}
