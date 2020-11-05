import { Component, OnInit } from '@angular/core';

// 用定義類別的方式固定共用的資料格式，Scenery是自己取的地方
// 類似資料庫的資料格式
export class Scenery {
  img: string;
  title: string;
  desc: string;
}


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  // 建立一個陣列[]
  scenery: Scenery[] = [
    // 需要符合上方設定的固定格式
    {img: 'assets/images/dodo&me1.jpeg', title: '第一次合照', desc: '初次和多多見面，害羞得多。'},
    {img: 'assets/images/dodo&me2.JPG', title: '第二次合照', desc: '來阿嬤家跟大家見面，熟悉後玩到很累的多。'},
    {img: 'assets/images/dodo&me3.jpeg', title: '第三次合照', desc: '越長越大也越來越可愛的多'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
