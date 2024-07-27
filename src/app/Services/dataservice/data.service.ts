import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  taskData: any
  constructor() { }


  
  Data() {
    const storedData = localStorage.getItem("task-data");
    if (storedData) {
      this.taskData = JSON.parse(storedData);
      return this.taskData
    }
  }
  addTask(obj: any) {
    console.log(obj);
    const task_Data = this.Data();
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
  deleteTask(obj: any) {
    const task_Data = this.Data();
    for (let i = 0; i < task_Data.length; i++) {
      if (task_Data[i].id === obj.id) {
        task_Data.splice(i, 1);
      }
    }
    return this.pushData(task_Data)
  }
  pushData(json: any) {
    const jsonData = JSON.stringify(json);
    localStorage.setItem("task-data", jsonData);
    return true
  }
}
