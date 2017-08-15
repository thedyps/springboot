import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const CORE_COMPONENTS = [PageNotFoundComponent];

@NgModule({
  imports: [CommonModule],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class MainModule { }
