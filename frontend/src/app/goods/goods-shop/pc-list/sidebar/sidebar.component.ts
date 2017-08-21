import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FilterData, sortWords} from "../../goods-shop-data";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule , Validators } from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() private pcFilter;
  private pcFilterKeys;
  private sortWords = sortWords;
  public filterData: FilterData;

  formModel: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.pcFilterKeys = Object.keys(this.pcFilter);
    this.setFilterPanel();
  }

  createForm() {
    this.formModel = this.fb.group({
      searchWord: [''],
      sortWord: [-1],
      filterPanel: this.fb.group({
        filterPcBrand: '',
        filterCpuKind: '',
        filterRamSpace: '',
        filterGraKind: '',
        filterOsName: ''
      })
    });
  }

  setFilterPanel() {
    this.pcFilterKeys.forEach((key: string) => {
      const filter: string[] = this.pcFilter[key];
      const filterCtl = filter.map((filter) => this.fb.control(filter));
      const filterFormArray = this.fb.array(filterCtl);
      this.formModel.setControl(key, filterFormArray);
    });
  }

  onSubmit() {
    console.log(this.formModel.value)
  }

}
