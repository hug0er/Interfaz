import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-hyperparameters',
  templateUrl: './hyperparameters.component.html',
  styleUrls: ['./hyperparameters.component.scss']
})
export class HyperparametersComponent implements OnInit {
  hyper = this.fb.group({
    supLR:0.5,
    infLR:0.1,
    windowSize:10,
    monthsPred:1
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  saveValues(){
    this.hyper.controls.infLR.setValue((<HTMLInputElement>document.getElementById("inf")).value);
    this.hyper.controls.supLR.setValue((<HTMLInputElement>document.getElementById("sup")).value);
    this.hyper.controls.windowSize.setValue((<HTMLInputElement>document.getElementById("win")).value);
    this.hyper.controls.monthsPred.setValue((<HTMLInputElement>document.getElementById("mon")).value);
  }
}