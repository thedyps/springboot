import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PcListComponent} from "./goods-shop/pc-list/pc-list.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
