import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService: AccountService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {

  }



  login(form: NgForm) {
    this.accountService.login(form.value).subscribe({
      next: _ => {
        this.router.navigate(['members']);
        this.toaster.success("Login successful")
      },
    })

  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
