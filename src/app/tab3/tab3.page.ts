import { Component, OnInit } from '@angular/core';
import { ZomatoService } from '../service/zomato.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  restaurantsArr = [];

  ngOnInit() {
    this.getTrichyRestaurants();
    setInterval(() => {
      this.getTrichyRestaurants();
    }, 3000000);
  }

  constructor(private zomatoService: ZomatoService) { }

  getTrichyRestaurants() {
    this.zomatoService.getTrichyHotels().subscribe(
      res => {
        res.nearby_restaurants.forEach(element => {
          this.restaurantsArr.push(element.restaurant)

        });
      }
    )
  }

  showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.location.href =url;
  }



}
