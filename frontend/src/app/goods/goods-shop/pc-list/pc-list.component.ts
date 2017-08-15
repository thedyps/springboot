import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PcFilter, PcList} from "../pc-list-data";
import {isNullOrUndefined} from "util";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css'],
})
export class PcListComponent implements OnInit {

  baseUrl: string = 'http://localhost:8080/goods/list/';
  pcType: string;
  pcList: PcList[] = [];
  pcFilter: PcFilter;
  pcListCount: number = 0;

  constructor(private http: Http, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe (params => {
      this.pcType = params['pcType'];
      this.getList().subscribe( (list) => this.pcList = list,
        (err) => {console.log(err)});
      this.getCount().subscribe((count) => this.pcListCount = count,
        (err) => {console.log(err)});
      this.getFilter().subscribe((filter) => this.pcFilter = filter,
        (err) => {console.log(err)});
    });

    if(isNullOrUndefined(this.pcType)) {
      this.pcType = "Basic";
    }
  }

  getCount(): Observable<number> {
    return this.http.get(this.baseUrl + this.pcType + '/count').map(res => res.json());
  }
  getList(): Observable<PcList[]> {
    return this.http.get(this.baseUrl + this.pcType + '/show').map(res => res.json());
  }

  getFilter(): Observable<PcFilter> {
    return this.http.get(this.baseUrl + 'filter').map(res => res.json());
  }
}
