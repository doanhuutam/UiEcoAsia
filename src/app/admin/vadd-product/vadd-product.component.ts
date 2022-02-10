import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vadd-product',
  templateUrl: './vadd-product.component.html',
  styleUrls: ['./vadd-product.component.css']
})
export class VaddProductComponent implements OnInit {

  form: any = {};
  product: any;
  fileName = '';


  constructor(private http: HttpClient,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.http.post('http://localhost:8080/product/create', this.form).subscribe(data => {
      this.product = data;
      this.route.navigate(["views"])
    })
  }

  uploadFile($event: string) {
    this.form.img = $event
  }

}
