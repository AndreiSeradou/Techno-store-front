import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"catalog",component:CatalogComponent},
  {path:"main-window",component:MainWindowComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"basket",component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
