import { Shopping } from './../../interfaces/shopping';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = []
  constructor(private cartSer: CartService) {

  }

  ngOnInit(): void {
    this.cartSer.getCart().subscribe((cart: any) => {
      this.cart = cart.map((shopping: any) => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
      // console.log(this.cart);
    })
  }

  delete(index: number) {
    this.cartSer.delete(this.cart[index].id)
  }

  save(index: number) {
    this.cartSer.save(this.cart[index].id, this.cart[index].amount)
  }

  // todo :order
}
