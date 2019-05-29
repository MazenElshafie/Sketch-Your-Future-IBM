import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor() {  }
  setData(key: string, data: any) {
    //sessionStorage.setItem(key, JSON.stringify(data));
    sessionStorage.setItem(key, data);
  }

  getData(key: string) {
    //return JSON.parse(sessionStorage.getItem(key));
    return sessionStorage.getItem(key);
  }

  clearData(key: string) {
    sessionStorage.removeItem(key);
  }

  cleanAll() {
    sessionStorage.clear()
  }
  }