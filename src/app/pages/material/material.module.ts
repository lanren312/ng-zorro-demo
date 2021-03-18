import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { MaterialAddStepOneComponent } from './material-add-step-one/material-add-step-one.component';
import { MaterialAddStepTwoComponent } from './material-add-step-two/material-add-step-two.component';


@NgModule({
  declarations: [MaterialListComponent, MaterialEditComponent,MaterialAddStepOneComponent,MaterialAddStepTwoComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialRoutingModule,
    NzFormModule,NzInputModule,NzButtonModule,NzIconModule,NzTableModule,NzDividerModule,NzPopconfirmModule,NzPaginationModule,
    NzUploadModule,NzSelectModule,NzCheckboxModule
  ]
})
export class MaterialModule { }
