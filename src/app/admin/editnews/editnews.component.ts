import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {
  product: any;
  id: any;
  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/news/findById/`+this.id).subscribe(data => {
      this.product = data;
    });
  }
  submit() {
    this.http.put(`http://localhost:8080/news/edit/${this.id}`, this.product).subscribe(data => {
      this.product = data;
    })
    this.route.navigate(['admin-news']).then(() => {
      window.location.reload()
    });
  }

  edit($event: string) {
    this.product.img = $event
  }

}
