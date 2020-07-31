import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../service/twitter.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tweetArr = [];
 
  ngOnInit(){
    this.getTrichyInformations();
    setInterval(() => {
      this.getTrichyInformations();
    }, 3000000);
  }

  constructor(private twitterService: TwitterService) { }

  getTrichyInformations() {
    this.twitterService.getTrichyCoronaInfo().subscribe(
      res => {
        this.tweetArr = res;
      }
    )
  }
}
