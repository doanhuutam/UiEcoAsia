import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  form: any = {};
  product: any;
  fileName = '';

  constructor(
    private http: HttpClient,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.http.post('http://localhost:8080/news/create', this.form).subscribe(data => {
      this.product = data;
      this.route.navigate(["admin-news"])
    })
  }

  uploadFile($event: string) {
    this.form.img = $event
  }

}
