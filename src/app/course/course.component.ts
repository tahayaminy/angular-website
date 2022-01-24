import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  index!:number;
  ngOnInit(): void {
    this.index=Number(this.router.snapshot.params['id']);
  }

}
