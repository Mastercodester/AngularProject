import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clcok-forum',
  imports: [CommonModule, FormsModule],
  templateUrl: './clcok-forum.html',
  styleUrl: './clcok-forum.css'
})
export class ClcokForum {
  Timezones: string[] = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney', 
    'America/Los_Angeles',
]
TimezonePick: string = 'America/New_York';

}
