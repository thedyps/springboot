import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PcFilter, PcList} from "../goods-shop-data";
import {isNullOrUndefined} from "util";
import {PcListService} from "./pc-list.service";

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css'],
  providers: [PcListService]
})
export class PcListComponent implements OnInit  {

  pcType: string;
  pcList: PcList[] = [];
  pcFilter: PcFilter;
  pcListCount: number = 0;
  active: boolean = false;

  constructor(private route: ActivatedRoute, private service: PcListService) {}

  ngOnInit() {
    this.route.params.subscribe (params => {
      this.pcType = params['pcType'];
      this.service.getList(this.pcType).subscribe( (list) => this.pcList = list,
        (err) => {console.log(err)});
      this.service.getCount(this.pcType).subscribe((count) => this.pcListCount = count,
        (err) => {console.log(err)});
      this.service.getFilter().subscribe((filter) => this.pcFilter = filter,
        (err) => {console.log(err)});
    });

    if(isNullOrUndefined(this.pcType)) {
      this.pcType = "Basic";
    }
  }

  toggleSide() {
    this.active = !this.active;
  }
}
