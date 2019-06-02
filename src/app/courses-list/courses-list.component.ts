import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input()
  courses = [];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  openCourse(course, $event) {
    this.router.navigateByUrl(`/courses/${course.id}`);
    $event.stopPropagation();
  }

  showCoursePlayList(course) {
    this.router.navigateByUrl(
      `/courses(playlist:playlist;description=${course.description})`
    );
  }

  ngOnInit() {
  }

}
