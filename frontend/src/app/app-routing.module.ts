import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsShopComponent} from "./goods/goods-shop/goods-shop.component";
import {PcListComponent} from "./goods/goods-shop/pc-list/pc-list.component";
import {PcDetailComponent} from "./goods/goods-shop/pc-detail/pc-detail.component";
import {
  PcCountResolverService, PcFilterResolverService,
  PcListResolverService
} from "./goods/goods-shop/pc-list/pc-list-resolver.service";
import {PcListService} from "./goods/goods-shop/pc-list/pc-list.service";
import {
  PcDetailImgResolverService,
  PcDetailResolverService,
  PcSummaryResolverService
} from "./goods/goods-shop/pc-detail/pc-detail-resolver.service";
import {PcDetailService} from "./goods/goods-shop/pc-detail/pc-detail.service";

const routes: Routes = [
  {path: '', redirectTo: 'goods/list/Basic', pathMatch: 'full'},
  {path: 'goods', component: GoodsShopComponent,
    children: [
      {path: 'list/:pcType', resolve:
        {
          count: PcCountResolverService,
          list: PcListResolverService,
          filter: PcFilterResolverService
        },
        component: PcListComponent},
      {path: 'detail/:pcCode', component: PcDetailComponent, resolve:
          {
            summary: PcSummaryResolverService,
            detail: PcDetailResolverService,
            image: PcDetailImgResolverService
          }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PcListService, PcCountResolverService, PcListResolverService, PcFilterResolverService,
    PcDetailService, PcSummaryResolverService, PcDetailResolverService, PcDetailImgResolverService]
})
export class AppRoutingModule { }
