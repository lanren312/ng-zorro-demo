import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface PesticideProducts {
  key: string;
  pesticideNo: string;
  pesticideName: string;
  pesticideClass: string;
  pesticideType: string;
  pesticideCategory: string;
  dosageForm: string;
  toxicity: string;
  activeIngredients: string;
  updateTime: string;
}

@Component({
  selector: 'app-pesticide-products-list',
  templateUrl: './pesticide-products-list.component.html',
  styleUrls: ['./pesticide-products-list.component.css']
})
export class PesticideProductsListComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      rangePicker: [[]],
    });

   
  }

  resetForm() {
    this.validateForm.reset();
  }

  listOfData: PesticideProducts[] = [
    {
      key: '1',
      pesticideNo: 'PD201813329',
      pesticideName: '乙草胺',
      pesticideClass: '生物化学农药',
      pesticideType: "制剂",
      pesticideCategory: "杀虫剂",
      dosageForm: "悬浮剂",
      toxicity:"低毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-15",
    },
    {
      key: '2',
      pesticideNo: 'PD202085417',
      pesticideName: '多效唑',
      pesticideClass: '微生物农药',
      pesticideType: "制剂",
      pesticideCategory: "杀菌剂",
      dosageForm: "水乳剂",
      toxicity:"微毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-13",
    },
    {
      key: '3',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '4',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '5',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '6',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '7',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '8',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '9',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '10',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '11',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '12',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '13',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '14',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '15',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '16',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '17',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '18',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '19',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '20',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    },
    {
      key: '21',
      pesticideNo: 'PD20207798',
      pesticideName: '氯嘧·乙草胺',
      pesticideClass: '植物源农药',
      pesticideType: "原药",
      pesticideCategory: "",
      dosageForm: "",
      toxicity:"中等毒",
      activeIngredients: "虱螨脲",
      updateTime: "2021-02-08",
    }
  ];


}
