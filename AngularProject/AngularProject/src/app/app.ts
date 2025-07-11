import { Component } from '@angular/core';
import { Settings } from './components/settings/settings';
import { appclocks } from './components/clocks/clocks';
import { CommonModule } from '@angular/common';
import { ClockDisplay } from './components/clock-display/clock-display';
import { ClcokForum } from './components/clcok-forum/clcok-forum';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Settings,appclocks, CommonModule,ClockDisplay,ClcokForum, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularProject';
}
