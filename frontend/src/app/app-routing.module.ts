import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsShopComponent} from "./goods/goods-shop/goods-shop.component";
import {PcListComponent} from "./goods/goods-shop/pc-list/pc-list.component";
import {PcDetailComponent} from "./goods/goods-shop/pc-detail/pc-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'goods/list/Basic', pathMatch: 'full'},
  {path: 'goods', component: GoodsShopComponent,
    children: [
      {path: 'list/:pcType', component: PcListComponent},
      {path: 'detail/:pcCode', component: PcDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
