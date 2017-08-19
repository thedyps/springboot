import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoodsShopComponent} from "./goods-shop/goods-shop.component";
import {NavbarComponent} from "./goods-shop/navbar/navbar.component";
import {PcListComponent} from "./goods-shop/pc-list/pc-list.component";
import {PcDetailComponent} from "./goods-shop/pc-detail/pc-detail.component";
import {FooterComponent} from "./goods-shop/footer/footer.component";
import {GoodsRoutingModule} from "./goods-routing.module";
import {ImageGalleryComponent} from "./goods-shop/pc-list/image-gallery/image-gallery.component";
import {DetailImageComponent} from "./goods-shop/pc-detail/detail-image/detail-image.component";
import {SidebarComponent} from "./goods-shop/pc-list/sidebar/sidebar.component";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const CORE_COMPONENTS = [GoodsShopComponent, NavbarComponent, PcListComponent, PcDetailComponent, FooterComponent,
ImageGalleryComponent, DetailImageComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, GoodsRoutingModule, FormsModule, HttpModule, ReactiveFormsModule],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class GoodsModule { }
