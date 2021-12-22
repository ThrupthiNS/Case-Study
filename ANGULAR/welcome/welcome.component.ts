import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  adduser(){
    this.router.navigate(['/adduser'])
  }

  addtask(){
    this.router.navigate(['/addtask'])
  }

  addnotes(){
    this.router.navigate(['/addnotes'])
  }

  addbookmark(){
    this.router.navigate(['/addbookmark'])
  }

  assigntask(){
    this.router.navigate(['/assigntask'])
  }

  deletetask(){
    this.router.navigate(['/deletetask'])
  }

  searchtask(){
    this.router.navigate(['/searchtask'])
  }

  tracktask(){
    this.router.navigate(['/tracktask'])
  }

  updatetask(){
    this.router.navigate(['/updatetask'])
  }

  gettask(){
    this.router.navigate(['/gettask'])
  }

  logout(){
    this.router.navigate([''])
  }

}
