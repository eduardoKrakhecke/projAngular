import { Component, OnInit } from '@angular/core';
import { Product } from "../../../model/product.model";
import {ProductService} from "../../../services/product.service";
import {ProductRead2DataSource} from "../product-read2/product-read2-datasource";

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.get().subscribe(products => {
      this.products = products

    })
  }

}
