import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogCategoriesComponent } from './pages/blog-categories/blog-categories.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { HomeComponent } from './pages/home/home.component';

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
