import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { BlogCategoriesComponent } from './pages/blog-categories/blog-categories.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CustomPostSingleComponent } from './pages/custom-post-single/custom-post-single.component';
import { PageinateComponent } from './pages/pageinate/pageinate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BlogSingleComponent,
    ProductSingleComponent,
    BlogCategoriesComponent,
    LoginComponent,
    CustomPostSingleComponent,
    PageinateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
