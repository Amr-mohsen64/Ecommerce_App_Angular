import { CartService } from './../../services/cart.service';

import { GoodsService } from './../../services/goods.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = []
  goodsObservable!: Subscription;
  add: number = -1;

  constructor(private goodsSer: GoodsService, private cartSer: CartService) { }


  ngOnInit(): void {
    this.goodsObservable = this.goodsSer.getAllGoods().subscribe((data: any) => {
      // console.log(data);

      this.goods = data.map((element: any) => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  // goods: Good[] = [
  //   { name: "car", price: 5, photoUrl: "assets/car.jpg" },
  //   { name: "glass", price: 59, photoUrl: "assets/glass.jpg" },
  //   { name: "shoes", price: 569, photoUrl: "assets/shoes.jpg" },
  //   { name: "watch", price: 5259, photoUrl: "assets/watch.jpg" },
  // ]

  addToCart(index: number) {
    this.add = +index
  }

  buy(amount: any) {
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cartSer.addToCart(data).then(() => this.add = -1)
  }

  ngOnDestroy(): void {
    this.goodsObservable.unsubscribe()
  }
}
