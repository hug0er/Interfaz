import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { DataComponent } from './data/data.component';
import { PoolComponent } from './pool/pool.component';
import { MetaLearningComponent } from './meta-learning/meta-learning.component';
import { HyperparametersComponent } from './hyperparameters/hyperparameters.component';
import { SummaryComponent } from './summary/summary.component';
import { BarComponent } from './bar/bar.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { RunLearningComponent } from './run-learning/run-learning.component';


const routes: Routes = [{ path: 'Bar', component: BarComponent },
{ path: 'Graphics', component: GraphicsComponent },
{ path: 'RunLearning', component: RunLearningComponent },
{ path: 'Summary', component: SummaryComponent },
{ path: 'Hyperparameters', component: HyperparametersComponent },
{ path: 'MetaLearning', component: MetaLearningComponent },
{ path: 'Pool', component: PoolComponent },
{ path: 'Window', component: WindowComponent },
{ path: 'Data', component: DataComponent },
{ path: 'Summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
