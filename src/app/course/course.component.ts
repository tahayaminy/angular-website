import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  title='Related Courses';
  index!:number;
  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>this.index=Number(params.get('id')));
  }

}
