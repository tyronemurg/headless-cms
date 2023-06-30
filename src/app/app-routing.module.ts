import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogCategoriesComponent } from './pages/blog-categories/blog-categories.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { HomeComponent } from './pages/home/home.component';
import { PageinateComponent } from './pages/pageinate/pageinate.component';
import { LoadmoreComponent } from './pages/loadmore/loadmore.component';
import { LoadmoreOnscrollComponent } from './pages/loadmore-onscroll/loadmore-onscroll.component';
import { CustomPostSingleComponent } from './pages/custom-post-single/custom-post-single.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/:id',
    component: BlogSingleComponent
  },
  {
    path: 'product/:id',
    component: ProductSingleComponent
  },
  {
    path: 'blog-categories',
    component: BlogCategoriesComponent
  },
  {
    path: 'custom-post/:id',
    component: CustomPostSingleComponent
  },
  { path: 'pageinate', component: PageinateComponent },
  { path: '', redirectTo: 'pageinate', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loadmore',
    component: LoadmoreComponent
  },
  {
    path: 'loadmore-onscroll',
    component: LoadmoreOnscrollComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [50, 50],
  relativeLinkResolution: 'legacy',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
