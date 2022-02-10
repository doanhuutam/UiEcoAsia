import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { ViewsComponent } from './admin/views/views.component';
import { VaddProductComponent } from './admin/vadd-product/vadd-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import { UploadFileComponent } from './home/upload-file/upload-file.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import { ViewsUserComponent } from './home/views-user/views-user.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { MeComponent } from './gioithieu/me/me.component';
import { HsonanglucComponent } from './gioithieu/hsonangluc/hsonangluc.component';
import { KhtieubieuComponent } from './gioithieu/khtieubieu/khtieubieu.component';
import { ViewsNewsComponent } from './admin/views-news/views-news.component';
import { AddnewsComponent } from './admin/addnews/addnews.component';
import { EditnewsComponent } from './admin/editnews/editnews.component';
import { NewsUserComponent } from './home/news-user/news-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ViewsComponent,
    VaddProductComponent,
    EditProductComponent,
    UploadFileComponent,
    ViewsUserComponent,
    MeComponent,
    HsonanglucComponent,
    KhtieubieuComponent,
    ViewsNewsComponent,
    AddnewsComponent,
    EditnewsComponent,
    NewsUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressBarModule,
    AngularFireStorageModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
