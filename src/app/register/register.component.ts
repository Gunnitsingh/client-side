import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter<any>();

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  register(form:NgForm){
    this.accountService.register(form.value).subscribe({
      next:()=>{
        this.cancel();
      },error:error=>console.log(error)
    });  
  }

  cancel(){
    this.cancelRegister.emit(true);
  }
}
