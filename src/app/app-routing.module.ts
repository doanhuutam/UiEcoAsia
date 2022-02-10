import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProductComponent} from "./admin/edit-product/edit-product.component";
import {VaddProductComponent} from "./admin/vadd-product/vadd-product.component";
import {ViewsComponent} from "./admin/views/views.component";
import {ViewsUserComponent} from "./home/views-user/views-user.component";
import {MeComponent} from "./gioithieu/me/me.component";
import {HsonanglucComponent} from "./gioithieu/hsonangluc/hsonangluc.component";
import {KhtieubieuComponent} from "./gioithieu/khtieubieu/khtieubieu.component";
import {ViewsNewsComponent} from "./admin/views-news/views-news.component";
import {AddnewsComponent} from "./admin/addnews/addnews.component";
import {EditnewsComponent} from "./admin/editnews/editnews.component";
import {NewsUserComponent} from "./home/news-user/news-user.component";

const routes: Routes = [
  {path:'',redirectTo:'hey',pathMatch:'full'},
  {path: 'views', component: ViewsComponent},
  {path: 'add', component:VaddProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path:'hey',component:ViewsUserComponent},
  {path:'me',component:MeComponent},
  {path:'hoso',component:HsonanglucComponent},
  {path:'kh',component:KhtieubieuComponent},
  {path:'admin-news',component:ViewsNewsComponent},
  {path:'news',component:NewsUserComponent},
  {path:'add-news',component:AddnewsComponent},
  {path:'edit-news/:id',component:EditnewsComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
