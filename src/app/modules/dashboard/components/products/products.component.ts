import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewCartComponent } from './view-cart/view-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  @Output() cartItems: EventEmitter<Product[]> = new EventEmitter()

  

  constructor(
    private service: ProductsService,
    private router: Router,
    public dialog: MatDialog
  )
  {}

  ngOnInit(){
    this.getProducts();    
  }

  getProducts(){
    this.service.getProducts("products").subscribe((res: any) => {
      this.products = res;
    })
  }


  changeQuantity(product: Product, operation: string){
    if(operation === 'add'){
      product.checked = true;
      if (product.initialQuantity === 10){
        alert ('Maximum Number of allowed items is 10');
        return
      }
      else product.initialQuantity += 1;
    }

    else if (operation === 'subtract'){
      if (product.initialQuantity === 0) {
        product.checked = false;
        return;
      }
      else product.initialQuantity -= 1;
    }
  }

  myCartUpdate(){
    const dialogRef =this.dialog.open(ViewCartComponent,{
      width: '60vh',
      height: '60vh',
      data: this.products
    }
    )
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.products = [...result]
      }
    });
    
  }

  sortFunction(e:any){
    if(e.source.value === 1){
      this.products.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    });

    console.log(this.products)
  }


  }
}
