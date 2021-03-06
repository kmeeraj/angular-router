import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CoursesComponent} from './courses/courses.component';
import {AlllessonsComponent} from './alllessons/alllessons.component';
import {CourseDetailsComponent} from './course-details/course-details.component';

const indexRoute: Route = {
  path: '',
  component: HomeComponent
};

const forwardRoute: Route = {
  path: '**',
  component: HomeComponent
};
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'lessons',
    component: AlllessonsComponent
  },
  indexRoute,
  forwardRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
