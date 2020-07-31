import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  newsArr = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getTrichyNews();
    setInterval(() => {
      this.getTrichyNews();
    }, 3000000);
  }

  getTrichyNews() {
    this.newsService.getTrichyNews().subscribe(
      res => {
        this.newsArr = res;
      }
    )
  }

}
