import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {PcDetail, PcDetailImg, PcSummary} from "../goods-shop-data";
import {PcDetailService} from "./pc-detail.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PcSummaryResolverService implements Resolve<PcSummary>{

  constructor(private service: PcDetailService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcSummary> {
    const param = route.params['pcCode'];
    return this.service.getPcSummary(param).map((summary) => {
      if (summary) return summary;
      this.router.navigate(['/goods/detail/'+param]);
      return null;
    })
  }
}

@Injectable()
export class PcDetailResolverService implements Resolve<PcDetail> {

  constructor(private service: PcDetailService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcDetail> {
    const param = route.params['pcCode'];
    return this.service.getPcDetail(param).map((detail) => {
      if (detail) return detail;
      this.router.navigate(['/goods/detail/'+param]);
      return null;
    })
  }
}

@Injectable()
export class PcDetailImgResolverService implements Resolve<PcDetailImg>{

  constructor(private service: PcDetailService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcDetailImg> {
    const param = route.params['pcCode'];
    return this.service.getPcDetailImg(param).map((img) => {
      if (img) return img;
      this.router.navigate(['/goods/detail/'+param]);
      return null;
    })
  }
}
