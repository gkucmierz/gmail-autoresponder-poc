import { Component, OnInit, OnDestroy } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit, OnDestroy {
  result = '';
  listeners = [];

  constructor(private gmail: GmailService) { }

  log(str) {
    this.result = `${str}\n${this.result}`;
  }

  logJSON(desc, json) {
    this.log(`${desc}: ${JSON.stringify(json, null, '  ')}`);
  }

  signin() {
    this.gmail.addon.signIn().then(() => {
      this.log('Signed in');
    }, error => {
      this.logJSON('Error while signing in', error);
    });
  }

  signout() {
    this.gmail.addon.signOut().then(() => {
      this.log('Signed out');
    });
  }

  setAutoresponder() {
    this.gmail.addon.setAutoresponder('HTML Message', 'Topic')
      .then(res => this.logJSON('Set Autoresponder', res));
  }

  resetAutoresponder() {
    this.gmail.addon.resetAutoresponder()
      .then(res => this.logJSON('Reset Autoresponder', res));
  }

  getAutoresponder() {
    this.gmail.addon.getAutoresponder()
      .then(res => this.logJSON('Get Autoresponder', res));
  }

  isSignedin() {
    this.log(`is signed in: ${this.gmail.addon.isSignedIn()}`);
  }

  ngOnInit() {
    this.listeners = [
      ['signIn', () => this.log('Event: Signed in')],
      ['signOut', () => this.log('Event: Signed out')],
    ];
    this.listeners.map(([name, fn]) => this.gmail.addon.eventEmitter.on(name, fn));
  }

  ngOnDestroy() {
    this.listeners.map(([name, fn]) => this.gmail.addon.eventEmitter.off(name, fn));
  }
}
