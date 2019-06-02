import { Component, OnInit } from '@angular/core';
import {coursesData} from '../../data/coursesData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: any;

  constructor() { }

  ngOnInit() {
    this.courses = coursesData.courses;
  }

}
