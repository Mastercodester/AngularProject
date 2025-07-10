import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));



    // 1.create interface Clock 
  //2.assign properties timezone and isDigital
  //3.create service ServiceClock
  //4. create methods addClock, deleteClock, editClock, getClocks
  //5. create component NewClockList
  //6. create component NewDeleteClock
  //7. create component NewSettings
  //8.create clocfks component
  //9.create ClockForm
  //10. create clockDisplay
  //11.Connect components with service  JUly9
////////////////////////////////////////////////////////////////



//1.add other  options on settings.html
//2.connect settings html with clock html 
//3. connect settings css with clock component css
//4. add clock form to setting component
//5. add clock display to clock component