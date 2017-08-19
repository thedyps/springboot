import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { GoodsModule } from "./goods/goods.module";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from "@angular/common";
import {LoginModule} from "./login/login.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
  imports: [
    /* 앵귤러 모듈 */
    BrowserModule

    /* 어플리케이션 모듈 */,
    MainModule, GoodsModule, LoginModule, AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
