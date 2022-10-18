import { Component, Input, OnInit } from '@angular/core';

//Models
import { Product } from 'src/app/models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productData : Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    shipping: 0,
    images: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
