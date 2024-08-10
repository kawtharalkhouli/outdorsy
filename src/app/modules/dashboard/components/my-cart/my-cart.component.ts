import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  @Input() cartItems: Product[] = [];

  constructor
  (
    private route: ActivatedRoute
  )
  {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
    });

  }

}
