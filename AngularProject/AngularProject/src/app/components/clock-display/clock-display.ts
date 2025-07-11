import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-display',
  imports: [],
  templateUrl: './clock-display.html',
  styleUrl: './clock-display.css'
})
export class ClockDisplay {
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
