import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClcokForum } from '../clcok-forum/clcok-forum';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule,ClcokForum],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {


}

