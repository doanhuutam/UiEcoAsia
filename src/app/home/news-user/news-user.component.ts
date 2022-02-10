import {Component, OnInit} from '@angular/core';
import {News} from "../../model/news";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-news-user',
  templateUrl: './news-user.component.html',
  styleUrls: ['./news-user.component.css']
})
export class NewsUserComponent implements OnInit {

  news: News[] | undefined;
  totalEleMent: number = 0;

  constructor(private http: HttpClient,
              private route: Router,) {
  }

  ngOnInit(): void {
    //truyền biến hiển thị
    this.getNews({page: 0, size: 3});
  }

  getNews(request: any) {
    const params = request
    this.http.get<News[]>('http://localhost:8080/news/shows', {params}).subscribe(data => {
      // @ts-ignore
      this.news = data['content']
      // @ts-ignore
      this.totalEleMent = data['totalElements']

    })
  };

  //sự kiện next page
  nextPage(event: PageEvent) {
    const request = {};
// @ts-ignore
    request['page'] = event.pageIndex.toString();
// @ts-ignore
    request['size'] = event.pageSize.toString();
    this.getNews(request)
  }

  // pageNews(request:any){
  //   const params=request
  //   return this.http.get("http://localhost:8080/news/show",{params})//param có sẵn của angular ,gán param thành request
  // }

}
