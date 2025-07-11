import { Routes } from '@angular/router';
import { Settings } from './components/settings/settings';
import { appclocks } from './components/clocks/clocks'; 
import { ClockDisplay } from './components/clock-display/clock-display';
import { ClcokForum } from './components/clcok-forum/clcok-forum';  

export const routes: Routes = [{path: '', redirectTo: 'settings', pathMatch: 'full'},
    {path: 'settings', component: Settings},
    {path: 'clocks', component: appclocks},
    {path: 'clock-display', component: ClockDisplay},
    {path:'clockforum', component:ClcokForum}
];
