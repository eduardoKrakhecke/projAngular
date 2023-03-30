import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData =  {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  handleMessage(): void {
    alert('Clicou no botão customizado')
  }

  navegateToProductCreate(): void {
   this.router.navigate(['/products/create'])
  }

}
