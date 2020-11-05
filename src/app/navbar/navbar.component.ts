import { Component, OnInit } from '@angular/core';

export class Menu {
  href: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  title = '多多教教主: 多多 ♫ ～';
  // menu: Menu[] = [
  //   { href: './jumbo.component.css', name: '首頁' },
  //   { href: './product.component.css', name: '基本資料' },
  //   { href: './hero.component.css', name: '寫真專區' },
  //   { href: './feature.component.css', name: '生活點滴' },
  // ];
  logo = '/assets/images/dogLogo.png';
  menu = ['首頁', '基本資料', '寫真專區', '生活點滴'];

  constructor() { }
  // 元件執行的涵式
  ngOnInit(): void {
  }

}
