import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/product.model";
import { endpoints } from '../constants/endpoints'
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private snackBar:MatSnackBar,
    private http: HttpClient
  ) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(endpoints.products, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(endpoints.products).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  getById(id: any): Observable<Product> {
    const url = `${endpoints.products}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${endpoints.products}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  delete(id: any): Observable<Product> {
    const url = `${endpoints.products}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError: boolean = false): void  {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

}
