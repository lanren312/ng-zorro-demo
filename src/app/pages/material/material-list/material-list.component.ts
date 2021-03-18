import { Component, OnInit } from '@angular/core';


interface material {
  key: string;
  applyNo: string;
  applyType: string;
  applyCategory: string;
  registCategory: string;
  materialType: string;
  updateTime: string;
}

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: material[] = [
    {
      key: '1',
      applyNo: "SQ2021020701",
      applyType: "农药登记",
      applyCategory: "新农药",
      registCategory: "农林用",
      materialType: "正式资料",
      updateTime: "2021-02-15"
    },
    {
      key: '2',
      applyNo: "SQ2021020702",
      applyType: "农药登记",
      applyCategory: "新农药",
      registCategory: "农林用",
      materialType: "补交资料",
      updateTime: "2021-02-15"
    },
    {
      key: '3',
      applyNo: "SQ2021020703",
      applyType: "农药登记",
      applyCategory: "新农药",
      registCategory: "农林用",
      materialType: "补交资料",
      updateTime: "2021-02-15"
    }
  ];
}
