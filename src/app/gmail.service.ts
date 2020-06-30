import { Injectable } from '@angular/core';
import { GmailAutoresponder } from 'gmail-autoresponder';

const CLIENT_ID = '416306538306-l4r33seebcbat4mmlrobf8fp5ll56rbi.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC7iIOvCCPrSPF4L46bRpKEjDNylEccAM0';

@Injectable({
  providedIn: 'root'
})
export class GmailService {
  addon: any;

  constructor() {
    this.addon = new GmailAutoresponder(CLIENT_ID, API_KEY);
  }
}
