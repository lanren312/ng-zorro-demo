import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-add-step-one',
  templateUrl: './material-add-step-one.component.html',
  styleUrls: ['./material-add-step-one.component.css']
})
export class MaterialAddStepOneComponent implements OnInit {
  pesticideName=null;
  pesticideType=null;
  pesticideClass=null;
  validateForm!: FormGroup;

  constructor(
    private route : ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      pesticideName: [null, [Validators.required]],
      pesticideType: [null, [Validators.required]],
      pesticideClass: [null, [Validators.required]]
    });

    this.validateForm.get("pesticideName")?.setValue(this.route.snapshot.queryParams["pesticideName"]);
    this.validateForm.get("pesticideType")?.setValue(this.route.snapshot.queryParams["pesticideType"]);
    this.validateForm.get("pesticideClass")?.setValue(this.route.snapshot.queryParams["pesticideClass"]);
  
  }

}
