import { Component, OnInit } from '@angular/core';

interface material {
  key: string;
  materialName: string;
  updateTime: string;
  materialId: string
}

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: material[] = [
    {
      key: "1",
      materialName: "申请表",
      updateTime: "2021-02-15 ",
      materialId: ""
    },
    {
      key: "2",
      materialName: "申请人证明文件",
      updateTime: "2021-02-15 ",
      materialId: ""
    },
    {
      key: "3",
      materialName: "申请人声明",
      updateTime: "2021-02-15 ",
      materialId: ""
    }
  ]

}
