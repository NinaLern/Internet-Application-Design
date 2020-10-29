import { Component, OnInit } from '@angular/core';

// 定義類別屬性
export class Food{
  name: string;
  intro: string;
  img: string;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  food: Food[] = [
    {name : '素猴菇三杯雞(蛋奶素)', intro: '300', img : '/assets/images/mushroom.jpg'},
    {name : '養生藥膳花雕雞', intro: '300', img : '/assets/images/soup.jpg'},
    {name : '睡衣多多', intro: '340', img : '/assets/images/dodo_pajamas.JPG'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  // 控制按鈕按下去之後會發生甚麼事
  onSelect(obj) {
    console.log(obj);
  }

}
