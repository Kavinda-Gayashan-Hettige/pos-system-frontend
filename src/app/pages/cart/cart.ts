import { Component, Input } from '@angular/core';
import { ProductItem } from "../../common/product-item/product-item";
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [ProductItem,NgFor,CommonModule,FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  @Input()
  public item:any;
  public CartItems:any=[];
constructor(){
  this.CartItems=JSON.parse(localStorage.getItem('cart') || '[]');
  console.log(this.CartItems);
}
placeOrder(itemToOrder: any){
  alert('Order Placed Successfully!');
   fetch("http://localhost:8080/order/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToOrder)
  })
  this.deleteOrder(itemToOrder);
}
deleteOrder(itemToDelete: any) {
   
    this.CartItems = this.CartItems.filter((item: any) => item.itemCode !== itemToDelete.itemCode);
    
   
    localStorage.setItem('cart', JSON.stringify(this.CartItems));
    
    alert(`${itemToDelete.description} removed from cart!`);
  }
}
