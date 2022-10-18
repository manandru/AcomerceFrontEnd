import { Component, OnInit } from '@angular/core';

//Models
import { Product } from 'src/app/models/product-model';

//Data
import ProductsJson from '../../data/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = ProductsJson
  

  constructor() { }

  ngOnInit(): void {
  }

}
