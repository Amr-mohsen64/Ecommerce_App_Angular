import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/good';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image') image!: ElementRef;
  constructor(private goodsSer: GoodsService) { }

  ngOnInit(): void {
  }


  addNewGood(form: NgForm) {
    let
      name: string | undefined = (<Good>form.value).name,
      price = (<Good>form.value).price,
      image = this.image.nativeElement.files[0];


    this.goodsSer.addNewGood(name, price, image).then((msg: any) => console.log(msg)
    )

  }
}
