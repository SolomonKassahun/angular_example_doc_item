import { Component, Input, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-products-alers',
  templateUrl: './products-alers.component.html',
  styleUrls: ['./products-alers.component.css']
})
export class ProductsAlersComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
