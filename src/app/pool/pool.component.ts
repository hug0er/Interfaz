import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})

export class PoolComponent implements OnInit {
  public methods = {
    "method1":false,
    "method2":false,
    "method3":false,
    "method4":false
  };
  constructor() { 
    
  }

  ngOnInit() {
  }
  chooseMethod(method){
    this.methods[method]= !this.methods[method];
    console.log(this.methods);
  }

}
