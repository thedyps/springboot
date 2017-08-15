import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {PcDetail, PcDetailImg, PcSummary} from "../pc-list-data";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PcDetailComponent implements OnInit {

  baseUrl: string = 'http://localhost:8080/goods/detail/';
  pcCode: string;
  pcSummary: PcSummary;
  pcDetail: PcDetail;
  pcDetailImg: PcDetailImg;

  constructor(private http: Http, private route: ActivatedRoute) {}

  ngOnInit() {
    this.pcCode = this.route.snapshot.params['pcCode'];

    this.getPcSummary().subscribe( (summary) => this.pcSummary = summary,
      (err) => {console.log(err)});
    this.getPcDetail().subscribe( (detail) => this.pcDetail = detail,
      (err) => {console.log(err)});
    this.getPcDetailImg().subscribe( (detailImg) => this.pcDetailImg = detailImg,
      (err) => {console.log(err)});
  }

  getPcSummary(): Observable<PcSummary> {
    return this.http.get(this.baseUrl + this.pcCode + '/summary').map(res => res.json());
  }
  getPcDetail(): Observable<PcDetail> {
    return this.http.get(this.baseUrl + this.pcCode + '/show').map(res => res.json());
  }

  getPcDetailImg(): Observable<PcDetailImg> {
    return this.http.get(this.baseUrl + this.pcCode + '/img').map(res => res.json());
  }
}
