import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsLessonComponent} from "./components-lesson/components-lesson.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {path: 'components-lesson', component: ComponentsLessonComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
