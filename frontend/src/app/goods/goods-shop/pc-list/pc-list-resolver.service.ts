import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {PcListService} from "./pc-list.service";
import {Observable} from "rxjs/Observable";
import {PcFilter, PcList} from "../goods-shop-data";

@Injectable()
export class PcCountResolverService implements Resolve<number>{

  constructor(private service: PcListService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
    const param = route.params['pcType'];
    return this.service.getCount(param).map((count) => {
      if (count) return count;
      this.router.navigate(['/goods/list/'+param]);
      return null;
    })
  }
}

@Injectable()
export class PcListResolverService implements Resolve<PcList[]>{

  constructor(private service: PcListService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcList[]> {
    const param = route.params['pcType'];
    return this.service.getList(param).map((list) => {
      if (list) return list;
      this.router.navigate(['/goods/list/'+param]);
      return null;
    })
  }
}

@Injectable()
export class PcFilterResolverService implements Resolve<PcFilter>{

  constructor(private service: PcListService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcFilter> {
    return this.service.getFilter().map((filter) => {
      if (filter) return filter;
      this.router.navigate(['/goods/list']);
      return null;
    })
  }
}



