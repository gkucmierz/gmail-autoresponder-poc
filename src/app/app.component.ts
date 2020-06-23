import { Component, OnInit } from '@angular/core';

// const addon = require('gmail-addon');
import * as addon from 'gmail-addon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gmail-addon-poc';

  ngOnInit() {

    console.log(addon);
  }

}
