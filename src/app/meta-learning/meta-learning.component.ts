import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta-learning',
  templateUrl: './meta-learning.component.html',
  styleUrls: ['./meta-learning.component.scss']
})
export class MetaLearningComponent implements OnInit {
  public metaMethods = {
    "method1":false,
    "method2":false,
  };
  constructor() { }
  ngOnInit() {
  }
  chooseMethod(method){
    this.metaMethods[method]= !this.metaMethods[method];
    console.log(this.metaMethods);
  }
}
