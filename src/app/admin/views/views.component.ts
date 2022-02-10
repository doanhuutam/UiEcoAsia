import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../model/product";

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'img', 'price', 'npp', 'edit', 'remove'];
  dataSource: any;
  name: any;
  @Input() product: any;
  idProduct: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
              private http: HttpClient,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  //lấy danh sách sản phẩm
  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/product/seach?name=').subscribe(data => {
      this.product = data;
      this.dataSource = new MatTableDataSource<any>(this.product);
      this.dataSource.paginator = this.paginator;
    })
  }

// tìm kiếm sản phẩm theo tên
  getProduct1() {
    this.http.get<Product[]>('http://localhost:8080/product/seach?name=' + this.name).subscribe(data => {
      this.product = data;
      this.dataSource = new MatTableDataSource<any>(this.product);
      this.dataSource.paginator = this.paginator;
    })
  }

  //lấy id sản phẩm
  getIdProduct(id: any) {
    this.idProduct = id;
  }

  //chuyển hướng
  editProduct(id: number) {
    this.route.navigate(['edit', id])
  }

  //chuyển hướng
  addProduct() {
    this.route.navigate(['add'])
  }

  //xoá sản phẩm sử dụng thông báo notification
  deleteProduct() {
    this.http.delete(`http://localhost:8080/product/deleteProduct/${this.idProduct}`).subscribe((data) => {
      // this.notificationService.showNoficatiton();
      this.route.navigate(['views']).then(()=>{
        window.location.reload();
      });
    })
    this.ngOnInit();
  }

}
