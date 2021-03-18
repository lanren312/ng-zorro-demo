import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { PesticideProductsRoutingModule } from './pesticide-products-routing.module';
import { PesticideProductsListComponent } from './pesticide-products-list/pesticide-products-list.component';
import { PesticideProductsEditComponent } from './pesticide-products-edit/pesticide-products-edit.component';

@NgModule({
  declarations: [ PesticideProductsListComponent, PesticideProductsEditComponent],
  imports: [
    CommonModule,
    PesticideProductsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,NzButtonModule,NzIconModule,NzSelectModule,NzTableModule,NzDividerModule,NzListModule,
    NzPopconfirmModule,NzInputModule,NzPaginationModule,NzModalModule
  ]
})
export class PesticideProductsModule { }
