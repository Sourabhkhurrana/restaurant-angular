import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/shared/services/restaurent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  restaurants: any = [];

  constructor(private restservice: RestaurentService) { }

  ngOnInit(): void {
    this.restservice.getAllRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  getCurrency(currency: any): any {
    return currency.substring(
      currency.lastIndexOf('('),
      currency.lastIndexOf(')') + 1
    );
  }

}
