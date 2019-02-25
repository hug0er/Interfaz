import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Interfaz';
  collapsed =false;

  changeCollapse (){
    this.collapsed = !this.collapsed
    console.log(this.collapsed)
  }
  
}
