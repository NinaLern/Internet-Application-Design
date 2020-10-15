import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 屬性(Property): 教學單位陣列
  title = '關於我 AboutMe';  // 屬性：字串
  menu = ['基本資料', '我的寶貝', '其他', '聯絡我'];
  // author = '莊立婷 Nina';
  logo = '/assets/images/me.JPG';
  // petName = '多多 Dodo';
  // petfile = 'dodo.JPG';
  // nickname = ' aka 小多子';
  mycss = 'text-danger';

  myEvent(event) {
    console.log(event);
  }

  changeColor() {
    if (this.mycss === 'text-danger') {
      this.mycss = 'text-primary';
    } else {
      this.mycss = 'text-danger';
    }
  }

  // 方法(Method): 選取項目
  itemSelected(e: any) {
    console.log('Yo');
    console.log('event內容:', e);
    console.log('被選項目為:', e.target.value);
  }
}
