import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<any>();
  registerForm: FormGroup = new FormGroup({});
  constructor(private accountService: AccountService,
    private toaster: ToastrService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.setUpRegisterForm();
  }

  setUpRegisterForm() {
    this.registerForm = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(4)]],
      'confirmPassword': ['', [Validators.required, this.matchValue('password')]]
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    })
  }

  matchValue(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : { notMatching: true }
    }
  }

  register() {
    // this.accountService.register(this.registerForm.value).subscribe({
    //   next:()=>{
    //     this.cancel();
    //   },error:error=>this.toaster.error(error.error)
    // });  
    console.log(this.registerForm.value)
  }

  cancel() {
    this.cancelRegister.emit(true);
  }
}
