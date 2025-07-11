//import { Component } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClcokForum } from '../clcok-forum/clcok-forum';
import { ClockDisplay } from '../clock-display/clock-display';





@Component({
  selector: 'app-clock',
  imports:[ClcokForum, ClockDisplay],
  templateUrl: './clocks.html',
  styleUrl: './clocks.css'
})
export class appclocks {
 
}


