import { Component, OnInit } from '@angular/core';
import {lessonsData} from '../../data/lessonsData';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  courseId: number;
  lessons = lessonsData.lessons;
  description: string;
  paramsSub: Subscription;
  queryParamsSub: Subscription;
  dirty = false;


  constructor(router: Router, route: ActivatedRoute) {
    console.log('Building course details component');
    // this.courseId = parseInt(route.snapshot.params['id']);
    route.params.subscribe(
      params => this.courseId = parseInt(route.snapshot.params['id'])
    );
  }

  previous() {
    return this.courseId - 1;
  }

  next() {
    return this.courseId + 1;
  }



  ngOnInit() {
  }

}
