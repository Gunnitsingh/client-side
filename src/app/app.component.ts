import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userData:any
  constructor (private httpService:HttpServiceService){}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data=>{
this.userData = data
    });
  }
}
