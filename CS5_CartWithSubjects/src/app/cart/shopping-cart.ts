import { Component, OnInit } from '@angular/core';
import {cartService} from './cartService';
import {product} from '../product';
import {productsCollection} from '../product';
@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.html'
})

export default class shoppingCart implements OnInit {
    constructor(private cart_Service :cartService){
    }
    Products : product[]
    ngOnInit(){
      // ocking as this ide doesn't support server side 
       this.Products = productsCollection;
    }
}