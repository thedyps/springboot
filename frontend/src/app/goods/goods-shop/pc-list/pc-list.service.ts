import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PcFilter, PcList} from "../goods-shop-data";

@Injectable()
export class PcListService {
  baseUrl: string = 'http://localhost:8080/goods/list/';

  constructor(private http: Http) { }

  getCount(pcType: string): Observable<number> {
    return this.http.get(this.baseUrl + pcType + '/count').map((res) => res.json());
  }
  getList(pcType: string): Observable<PcList[]> {
    return this.http.get(this.baseUrl + pcType + '/show').map((res) => res.json());
  }
  getFilter(): Observable<PcFilter> {
    return this.http.get(this.baseUrl + 'filter').map((res) => res.json());
  }
}
