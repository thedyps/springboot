import {Component, Input, OnInit} from '@angular/core';
import {FilterData} from "../../goods-shop-data";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule , Validators } from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() pcFilter;
  public filterData: FilterData;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      pcBrand: this.fb.array([]),
      cpuKind: this.fb.array( []),
      ramSpace: this.fb.array([]),
      graKind: this.fb.array([]),
      osName: this.fb.array([]),
    });
  }

  onChanges(pcBrand:string, isChecked: boolean) {
    const pcBrandFormArray = <FormArray>this.myForm.controls.pcBrand;

    if(isChecked) {
      pcBrandFormArray.push(new FormControl(pcBrand))
    } else {
      let index = pcBrandFormArray.controls.findIndex(x => x.value == pcBrand)
      pcBrandFormArray.removeAt(index);
    }
  }
}
