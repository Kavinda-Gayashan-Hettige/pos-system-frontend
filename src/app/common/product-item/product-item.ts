import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input()
  public item:any;

  addToCart(){
    console.log('Adding to cart');
    alert('Added to Cart '+this.item.description);

  let currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (!Array.isArray(currentCart)) {
      currentCart = [];
    }
    currentCart.push(this.item);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  
}
  
  
}
