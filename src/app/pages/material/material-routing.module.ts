import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { MaterialAddStepOneComponent } from './material-add-step-one/material-add-step-one.component';
import { MaterialAddStepTwoComponent } from './material-add-step-two/material-add-step-two.component';

const routes: Routes = [{
  path: 'material',
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    { path: 'index', component: MaterialListComponent },
    { path: 'edit', component: MaterialEditComponent },
    { path: 'addStepOne', component: MaterialAddStepOneComponent },
    { path: 'addStepTwo', component: MaterialAddStepTwoComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
