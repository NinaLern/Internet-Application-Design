import { Component, OnInit } from '@angular/core';

export class Product {
  img: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {img: '/assets/images/rice.png', title: '定食', desc: '定食主菜非常多樣，常見的有生魚片、豬排、秋刀魚、天婦羅等主菜，除主菜外，亦提供煮菜、煎蛋、沙拉等 1～3 種配菜，盛裝米飯、醬湯的碗及醃菜亦包括在定食內。與西式套餐不同，享用定食的時候會同時擺上米飯、湯汁、醃漬物、菜餚等所有菜品。為了讓定食吃起來更加美味，可以依循先吃米飯，啜湯汁，再吃米飯，接著享用菜餚，最後再吃米飯」這種以米飯為中心的享用方式。'},
    {img: '/assets/images/vegetables.png', title: '輕食', desc: '“輕食”，最初發源於日本，初始定義是指分量少而容易吃飽的食物。後來詞義擴大演變成爲低脂肪、低熱量、少糖、少鹽且富含高纖維和營養的食物。它以低熱量的食材，取代大魚大肉，使人們不再過分追求爲滿足口腹之欲的享樂。'},
    {img: '/assets/images/piece-of-cake.png', title: '點心', desc: '點心是糕餅糖品之類的體型較小但又有一定分量、味道好的食物，比零食正式。通常不單獨地作為正餐。最初的定義是在略有些飢餓的時候食用的小食品，但現在其涵義也不限於此，凡是分量較小精巧的食物都可以稱作點心。'},
    {img: '/assets/images/coffee-cup.png', title: '飲料', desc: '飲料是指經過加工的液體，供予飲用，分為軟飲料和酒精飲料。教士會館提供咖啡、鮮奶、台灣茶、日本茶、有機茶'}
  ]
  constructor() { }

  ngOnInit() {
  }
}