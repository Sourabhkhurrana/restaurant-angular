import { Component ,OnInit} from '@angular/core';
import { RestaurentService } from 'src/shared/services/restaurent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  cuisines: any = [];

  constructor(private restservice: RestaurentService) { }

  ngOnInit(): void { 
    this.restservice.getAllCuisinesWithCount().subscribe(data => {
      console.log(data)
      this.cuisines = data;
    });
  }
}
