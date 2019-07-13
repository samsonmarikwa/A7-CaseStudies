import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  nextId : number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
  .subscribe(products => {
                  this.products = products;
                  this.nextId = Math.max.apply(Math,products.map(function(o){return (+o.productId)+1;}));
            });
  }

  add(id:number,name: string, description: string, rating:number, price: number): void {
let product :Product = new Product();
product.productId = id;
product.productName= name;
product.productDescription = description;
product.customerRating=rating;
product.price=price;
    
    this.productService.addProduct(product)
      .subscribe(_ => {
        this.products.push(product);
        this.nextId++;
      });
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}
