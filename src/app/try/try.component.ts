import {Component} from '@angular/core';
import {SpeedTestService} from "ng-speed-test";



@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent {
 constructor(private speedTestService:SpeedTestService) {
   this.speedTestService.getMbps().subscribe(
     (speed) => {
       this.internetSpeed=speed;
       console.log('Your speed is ' + speed);
     }
   );
 }
  volume: number = 0;
internetSpeed:number=0
  ngOnInit() {
    this.getTime()
    this.getExperationDate()
    this.getEst()
  }

  getTime() {
    // Get the current date and time
    const currentDate = new Date();

// Set the options for formatting the time
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/New_York',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
// Format the current time in EST
    const estTime = currentDate.toLocaleString('en-US', options);
    const militime=currentDate.getTime()
    console.log(estTime); // Output: 02:00:00
    console.log(militime); // Output: 02:00:00

    const expirationTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1, // Add one day
      2, // 02:00 hours
      0, // 0 minutes
      0 // 0 seconds

    );
    const expirationTimeString = expirationTime.toUTCString();
    console.log(expirationTimeString)
  }

  getExperationDate() {
    const currentDate = new Date();

// Convert the current time to EST
    const estOffset = -5 * 60; // Eastern Standard Time offset is -5 hours
    const estTime = new Date(currentDate.getTime() + estOffset * 60 * 1000);
    const expirationTime = new Date(
      estTime.getFullYear(),
      estTime.getMonth(),
      estTime.getDate() + 1, // Add one day
      2, // 02:00 hours
      0, // 0 minutes
      0 // 0 seconds

    );
    const expirationTimeString = expirationTime.toUTCString();
    console.log(expirationTimeString)
  }

  getEst(){
    // Get the current date and time
    const currentDate = new Date();

// Set the time zone to Eastern Standard Time
    currentDate.setTime(
      currentDate.getTime() +
      currentDate.getTimezoneOffset() * 60 * 1000 -
      5 * 60 * 60 * 1000 // Eastern Standard Time offset is -5 hours
    );

// Get the time in milliseconds
    const estTimeMilliseconds = currentDate.getTime();

    console.log(estTimeMilliseconds);

  }



}
