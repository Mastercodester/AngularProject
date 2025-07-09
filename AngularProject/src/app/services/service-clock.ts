import { Injectable } from '@angular/core';
import { Clock } from '../clock';

@Injectable({
  providedIn: 'root'
})
export class ServiceClock {

private clockList: Clock[] = [];


  constructor() { 
    this.clockList.push
  }

  getClocks(): Clock[] {
    return this.clockList;
  }

  addClock(clock: Clock): void {
    this.clockList.push(clock);
  }

  deleteClock(index: number): void {
    if (index >= 0 && index < this.clockList.length) {
      this.clockList.splice(index, 1);
    }
  }

  editClock(index: number, updatedClock: Clock) {
    if (index >= 0 && index < this.clockList.length) {
      this.clockList[index] = updatedClock;
    }
  }

}
