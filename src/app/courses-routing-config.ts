import {CoursesComponent} from './courses/courses.component';
import {CourseDetailsComponent} from './course-details/course-details.component';

export const courseRouterConfig = [{
  path: 'courses',
  children: [
    {
      path: '',
      component: CoursesComponent
    },
    {
      path: ':id',
      component: CourseDetailsComponent
    },
  ]
}]
