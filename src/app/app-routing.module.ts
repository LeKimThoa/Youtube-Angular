import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './components/trending/trending.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path:'library' , component: LibraryComponent, 
  },
  {
  path:'trending',component:TrendingComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }