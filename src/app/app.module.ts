import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { DataComponent } from './data/data.component';
import { PoolComponent } from './pool/pool.component';
import { MetaLearningComponent } from './meta-learning/meta-learning.component';
import { HyperparametersComponent } from './hyperparameters/hyperparameters.component';
import { SummaryComponent } from './summary/summary.component';
import { BarComponent } from './bar/bar.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { RunLearningComponent } from './run-learning/run-learning.component';

//para subir archivos
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    DataComponent,
    PoolComponent,
    MetaLearningComponent,
    HyperparametersComponent,
    SummaryComponent,
    BarComponent,
    GraphicsComponent,
    RunLearningComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
