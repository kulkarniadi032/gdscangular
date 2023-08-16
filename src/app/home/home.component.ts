import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  project: number = 0;
  student: number = 0;
  event: number = 0;
  hackathon: number = 0;
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1250) {
      // PROFESSIONAL INSTRUCTORS
      const projectCounterStop = setInterval(() => {
        if (this.project < 50) {
          this.project++;
        }
        if (this.project >= 50) {
          clearInterval(projectCounterStop);
        }
      }, 100);
      // TOTAl STUDENTS
      const projectCounterStop2 = setInterval(() => {
        if (this.event < 3) {
          this.event++;
        }
        if (this.event >= 3) {
          clearInterval(projectCounterStop2);
        }
      }, 200);
      // TOTAl HACKATHONS
      const projectCounterStop3 = setInterval(() => {
        if (this.hackathon < 25) {
          this.hackathon++;
        }
        if (this.hackathon >= 25) {
          clearInterval(projectCounterStop3);
        }
      }, 200);
      // TOTAl STUDENTS
      const projectCounterStop1 = setInterval(() => {
        if (this.student < 1200) {
          this.student++;
        }
        if (this.student >= 1200) {
          clearInterval(projectCounterStop1);
        }
      }, 30);
    }
  }
}
