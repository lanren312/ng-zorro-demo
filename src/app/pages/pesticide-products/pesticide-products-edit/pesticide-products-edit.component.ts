import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router} from '@angular/router';
interface contentActiveIngredientsData  { // 有效成分及含量
  id: string;
  pesticideNameCN: string; // 中文通用名称
  pesticideNameEN: string; // 国际通用名称
  content: string; // 含量
}
interface usecopeAndMethodData { //使用范围和使用方法
  id: string;
  crop: string; // 作物
  controlObject: string; // 防治对象
  dosageActiveIngredients: string; //有效成分用药量
  dosagePreparation: string; // 制剂用药量
  applicationMethod: string; //施用方法
}
@Component({
  selector: 'app-pesticide-products-edit',
  templateUrl: './pesticide-products-edit.component.html',
  styleUrls: ['./pesticide-products-edit.component.css']
})
export class PesticideProductsEditComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  i = 0;
  j = 0 ;
  editId: string | null = null;
  contentActiveIngredientsData: contentActiveIngredientsData[] = [];
  usecopeAndMethodData: usecopeAndMethodData[] = [];

  // 有效成分及含量
  startContentActiveIngredientsEdit(id: string): void {
    this.editId = id;
  }

  stopContentActiveIngredientsEdit(): void {
    this.editId = null;
  }

  deleteContentActiveIngredientsRow(id: string): void {
    this.contentActiveIngredientsData = this.contentActiveIngredientsData.filter(d => d.id !== id);
  }

  addContentActiveIngredientsRow(): void {
    this.contentActiveIngredientsData = [
      ...this.contentActiveIngredientsData,
      {
        id: `${this.i}`,
        pesticideNameCN: ``,
        pesticideNameEN: ``,
        content: ``
      }
    ];
    this.i++;
  }

  // 使用范围和使用方法
  startUsecopeAndMethodEdit(id: string): void {
    this.editId = id;
  }

  stopUsecopeAndMethodEdit(): void {
    this.editId = null;
  }

  deleteUsecopeAndMethodRow(id: string): void {
    this.usecopeAndMethodData = this.usecopeAndMethodData.filter(d => d.id !== id);
  }

  addUsecopeAndMethodRow(): void {
    this.usecopeAndMethodData = [
      ...this.usecopeAndMethodData,
      {
        id: `${this.j}`,
        crop: ``,
        controlObject: ``,
        dosageActiveIngredients: ``,
        dosagePreparation: ``,
        applicationMethod: ``
      }
    ];
    this.j++;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // 创建步骤一
  gotoMaterialAddStepOne(){
    let pesticideName = this.validateForm.get('pesticideName')?.value;
    let pesticideType = this.validateForm.get('pesticideType')?.value;
    let pesticideClass = this.validateForm.get('pesticideClass')?.value;
    console.log(pesticideName);
    this.router.navigate(['/material/addStepOne'],{queryParams:{'pesticideName': pesticideName, 'pesticideType': pesticideType, "pesticideClass": pesticideClass }})
  }
  
  
  constructor(private fb: FormBuilder, public router:Router) { }

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      pesticideName: [null, [Validators.required]],
      pesticideType: [null, [Validators.required]],
      pesticideClass: [null, [Validators.required]]
    });

    this.addContentActiveIngredientsRow(); 
    this.addUsecopeAndMethodRow();
  }

}
