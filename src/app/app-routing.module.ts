import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsLessonComponent} from "./components-lesson/components-lesson.component";
import {MainComponent} from "./main/main.component";
import {TwoWayBindingComponent} from "./two-way-binding/two-way-binding.component";


const routes: Routes = [
  {path: 'components-lesson', component: ComponentsLessonComponent},
  {path: '', component: MainComponent},
  {path: 'twoway', component: TwoWayBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
