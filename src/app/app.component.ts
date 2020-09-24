import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 屬性(Property): 教學單位陣列
  title = '真理大學';  // 屬性：字串
  units = [            // 屬性：陣列
    '人文學院',
    '觀光休閒與運動學院',
    '管理學院',
    '財經學院',
    '資訊與商業智慧學院',
    '通識教育中心',
    '體育教育中心'
  ];

  // 方法(Method): 選取項目
  itemSelected(e: any) {
    console.log('Yo');
    console.log('event內容:', e);
    console.log('被選項目為:', e.target.value);
  }
}
