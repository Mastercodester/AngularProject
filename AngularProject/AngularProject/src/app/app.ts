import { Component } from '@angular/core';
import { Settings } from './components/settings/settings';
import { appclocks } from './components/clocks/clocks';


@Component({
  selector: 'app-root',
  imports: [Settings,appclocks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularProject';
}
