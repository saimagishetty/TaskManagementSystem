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
  getTicketbyProjectId(ID: any) {
    let alltickets:any = this.getTickets()
    let _array = alltickets.filter((ticket:any) => ticket.project_id == ID);
    console.log(_array);
    return _array
  }
  addTask(obj: any) {
    console.log(obj);
    const task_Data = this.getTickets();
    if (obj.id == "") {
      if (task_Data.length > 0) {
        let last_obj = task_Data[task_Data.length - 1]
        obj.id = Number(last_obj.id) + 1
      }
      else {
        obj.id = 1
      }
      task_Data.push(obj)
      return this.pushData(task_Data)
    }
    else {
      let target_index;
      for (let i = 0; i < task_Data.length; i++) {
        if (task_Data[i].id == obj.id) {
          target_index = i
          break
        }
      }
      task_Data[Number(target_index)] = obj
      console.log(task_Data);
      return this.pushData(task_Data)
    }
  }
  pushData(json: any) {
    const jsonData = JSON.stringify(json);
    localStorage.setItem("_tickets", jsonData);
    return true
  }
}
