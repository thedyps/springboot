import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PcDetail, PcDetailImg, PcSummary} from "../goods-shop-data";
import {Http} from "@angular/http";

@Injectable()
export class PcDetailService {

  constructor(private http: Http) { }

  baseUrl: string = 'http://localhost:8080/goods/detail/';

  getPcSummary(pcCode: string): Observable<PcSummary> {
    return this.http.get(this.baseUrl + pcCode + '/summary').map((res) => res.json());
  }
  getPcDetail(pcCode: string): Observable<PcDetail> {
    return this.http.get(this.baseUrl + pcCode + '/show').map((res) => res.json());
  }

  getPcDetailImg(pcCode: string): Observable<PcDetailImg> {
    return this.http.get(this.baseUrl + pcCode + '/img').map((res) => res.json());
  }
}
