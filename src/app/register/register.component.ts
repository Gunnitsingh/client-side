import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter<any>();

  constructor(private accountService:AccountService,
    private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  register(form:NgForm){
    this.accountService.register(form.value).subscribe({
      next:()=>{
        this.cancel();
      },error:error=>this.toaster.error(error.error)
    });  
  }

  cancel(){
    this.cancelRegister.emit(true);
  }
}
