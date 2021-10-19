import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user')!) || {};
  constructor() {
    console.log(this.user);
  }

  ngOnInit(): void {}
}
