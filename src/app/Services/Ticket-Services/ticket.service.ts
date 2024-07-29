import { Injectable } from '@angular/core';
import { _tickets } from '../Data-files/Ticketes';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTickets() {
    const jsonString = localStorage.getItem('_tickets');
    if (jsonString) {
      return JSON.parse(jsonString);
    }

    const jsonStringProject = JSON.stringify(_tickets);
    localStorage.setItem('_tickets', jsonStringProject);
    return _tickets;
  }
}
