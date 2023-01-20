import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

currentUser$:Observable<User | null> = of(null);
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  

  login(form:NgForm){
    this.accountService.login(form.value).subscribe({
      next:resprnce=>{
        console.log(resprnce);
       
      },
      error:error=>console.log(error)
    })
   }

   logout(){
    this.accountService.logout();
    
   }
 }
