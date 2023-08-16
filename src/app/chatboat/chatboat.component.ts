import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chatboat',
  templateUrl: './chatboat.component.html',
  styleUrls: ['./chatboat.component.css'],
})
export class ChatboatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const path = window.location.pathname;
      if (path != '/admin') {
        document.getElementById('button')?.click();
      }
    }, 5000);
  }
  isShow: boolean = false;
  showChatBox() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}
