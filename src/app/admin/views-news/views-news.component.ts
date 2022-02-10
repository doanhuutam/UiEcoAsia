import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {MatTableDataSource} from "@angular/material/table";
import {News} from "../../model/news";

@Component({
  selector: 'app-views-news',
  templateUrl: './views-news.component.html',
  styleUrls: ['./views-news.component.css']
})
export class ViewsNewsComponent implements OnInit {
  displayedColumns: string[] = ['id' , 'name', 'img', 'price', 'npp', 'edit', 'remove'];
  dataSource: any;
  name: any;
  @Input() news: any;
  idnews: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;


  constructor(
    private http: HttpClient,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getNews();
  }
  //lấy danh sách sản phẩm
  getNews() {
    this.http.get<News[]>('http://localhost:8080/news/show').subscribe(data => {
      this.news = data;
      this.dataSource = new MatTableDataSource<any>(this.news);
      this.dataSource.paginator = this.paginator;
    })
  }
  // tìm kiếm sản phẩm theo tên
  seachNews() {
    this.http.get<News[]>('http://localhost:8080/news/seach?title=' + this.name).subscribe(data => {
      this.news = data;
      this.dataSource = new MatTableDataSource<any>(this.news);
      this.dataSource.paginator = this.paginator;
    })
  }
  //lấy id sản phẩm
  getIdNews(id: any) {
    this.idnews = id;
  }
  editNews(id: number) {
    this.route.navigate(['edit-news', id])
  }
  //chuyển hướng
  addNews() {
    this.route.navigate(['add-news'])
  }
  deleteNews() {
    this.http.delete(`http://localhost:8080/news/delete/${this.idnews}`).subscribe((data) => {
      // this.notificationService.showNoficatiton();
      this.route.navigate(['views']).then(()=>{
        window.location.reload();
      });
    })
    this.ngOnInit();
  }

}
