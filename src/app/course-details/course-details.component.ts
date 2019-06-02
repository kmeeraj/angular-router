import { Component, OnInit } from '@angular/core';
import {lessonsData} from '../../data/lessonsData';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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


  constructor(route: ActivatedRoute) {
    this.paramsSub = route.params.subscribe(
      params => {
        this.courseId = parseInt(params.id, 7);
        this.dirty = false;
      }
    );

    this.queryParamsSub = route.queryParams.subscribe(
      params => {
        this.description = params['description'];
      }
    );

    console.log('observers count',
      route.queryParams['observers'].length);
  }

  previous() {
    return this.courseId - 1;
  }

  next() {
    return this.courseId + 1;
  }


  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.queryParamsSub.unsubscribe();
  }

  ngOnInit() {
  }

}
