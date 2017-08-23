import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PcFilter, PcList} from "../goods-shop-data";

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit  {

  pcType: string;
  pcList: PcList[] = [];
  pcFilter: PcFilter;
  pcCount: number = 0;
  active: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: {count: number}) => {
      this.pcCount = data.count;
    });
    this.route.data.subscribe((data: {list: PcList[]}) => {
      this.pcList = data.list;
    });
    this.route.data.subscribe((data: {filter: PcFilter}) => {
      this.pcFilter = data.filter;
    });
  }

  toggleSide() {
    this.active = !this.active;
  }
}
