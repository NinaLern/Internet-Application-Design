import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  title = '教士會館';
  menu = ['首頁', '特色餐點', '營業項目', '交通資訊'];
  logo = '/assets/images/logo.jpg';

  constructor() { }
  // 元件執行的涵式
  ngOnInit(): void {
  }

}
