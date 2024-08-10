import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit{

  total: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ViewCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[],
    public dialog: MatDialog,
  ){}

  closeDialog(){
    this.dialogRef.close(this.data)
  }

  ngOnInit(){
    this.data.forEach((product: any)=>{
      if (product.initialQuantity > 0)  this.total +=1;
    })

  }

  delete(p: Product){
    const index = this.data.indexOf(p)
    this.data[index].initialQuantity = 0;
    this.total -=1;
  }


}
