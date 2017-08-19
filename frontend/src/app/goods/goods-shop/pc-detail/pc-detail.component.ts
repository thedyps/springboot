import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PcDetail, PcDetailImg, PcSummary} from "../goods-shop-data";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {PcDetailService} from "./pc-detail.service";


@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css'],
  providers: [PcDetailService]
})

export class PcDetailComponent implements OnInit {

  public pcCode: string;
  pcSummary: PcSummary;
  pcDetail: PcDetail;
  pcDetailImg: PcDetailImg;

  constructor(private route: ActivatedRoute,
              private service: PcDetailService) {}

  ngOnInit() {
    this.pcCode = this.route.snapshot.params['pcCode'];

    this.service.getPcSummary(this.pcCode).subscribe( (summary) => this.pcSummary = summary,
      (err) => {console.log(err)});
    this.service.getPcDetail(this.pcCode).subscribe( (detail) => this.pcDetail = detail,
      (err) => {console.log(err)});
    this.service.getPcDetailImg(this.pcCode).subscribe( (detailImg) => this.pcDetailImg = detailImg,
      (err) => {console.log(err)});
  }
}
