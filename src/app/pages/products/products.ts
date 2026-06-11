import { Component, OnInit } from '@angular/core';
import { ProductItem } from "../../common/product-item/product-item";
import { NgFor } from "@angular/common";


@Component({
  selector: 'app-products',
  imports: [ProductItem, NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  ngOnInit(): void {
    console.log('Products page works!');
    this.loadProducts();
  }
  public listOfProducts:any=[];

  loadProducts(){
    fetch("http://localhost:8080/item/get-all")
    .then(res=>res.json())
    .then(data=>{
      this.listOfProducts=data;
      console.log(data);
    })
  }
}
