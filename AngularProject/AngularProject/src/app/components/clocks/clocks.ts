//import { Component } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';





@Component({
  selector: 'app-clock',
  templateUrl: './clocks.html',
  styleUrl: './clocks.css'
})
export class appclocks {
  intervalId: ReturnType<typeof setInterval> | undefined;
  hourDeg = 0;
  minuteDeg = 0;
 secondDeg = 0;

  ngOnInit(): void {
    this.updateClock();
   this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    this.secondDeg = seconds * 6;
    this.minuteDeg = minutes * 6 + seconds * 0.1;
    this.hourDeg = ((hours % 12) * 30) + (minutes * 0.5);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}


