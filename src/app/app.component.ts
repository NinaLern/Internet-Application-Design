import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 屬性(Property): 教學單位陣列
  title = '關於我 AboutMe';  // 屬性：字串
  author = '莊立婷 Nina';
  myfile = 'me.JPG';
  petName = '多多 Dodo';
  petfile = 'dodo.JPG';
  nickname = ' aka 小多子';


  // 方法(Method): 選取項目
  itemSelected(e: any) {
    console.log('Yo');
    console.log('event內容:', e);
    console.log('被選項目為:', e.target.value);
  }
}
