import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {sortWords} from "../../goods-shop-data";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() private pcFilter;
  private sortWords = sortWords;

  formModel: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  ngOnChanges() {
  }

  createForm() {
    this.formModel = this.fb.group({
      searchWord: [''],
      sortWord: [-1],
      filterPanel: this.fb.group({
        filterPcBrand: this.fb.array([]),
        filterCpuKind: this.fb.array([]),
        filterRamSpace: this.fb.array([]),
        filterGraKind: this.fb.array([]),
        filterOsName: this.fb.array([])
      })
    });
  }

  onChange(kind:string, value:string, isChecked: boolean) {
    const formArray = <FormArray>this.formModel.get('filterPanel').get(kind);

    if(isChecked) {
      formArray.push(new FormControl(value));
    } else {
      let index = formArray.controls.findIndex((x) => x.value == value)
      formArray.removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.formModel.value)
  }

}
