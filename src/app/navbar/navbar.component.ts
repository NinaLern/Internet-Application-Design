import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  title = '多多教教主多多';
  menu = ['首頁', '生活點滴', '基本資料', '奴才資訊'];
  logo = '/assets/images/house_icon_white.png';

  constructor() { }
  // 元件執行的涵式
  ngOnInit(): void {
  }

}
