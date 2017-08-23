import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PcDetail, PcDetailImg, PcSummary} from "../goods-shop-data";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {PcDetailService} from "./pc-detail.service";


@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})

export class PcDetailComponent implements OnInit {

  public pcCode: string;
  pcSummary: PcSummary;
  pcDetail: PcDetail;
  pcDetailImg: PcDetailImg;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: {summary: PcSummary}) => {
      this.pcSummary = data.summary;
    });
    this.route.data.subscribe((data: {detail: PcDetail}) => {
      this.pcDetail = data.detail
    });
    this.route.data.subscribe( (data: {image: PcDetailImg}) => {
      this.pcDetailImg = data.image;
    });
  }
}
