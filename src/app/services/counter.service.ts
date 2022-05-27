import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = new BehaviorSubject(0);
  constructor() {}
  getCounter() {
    return this.counter;
  }
  setCounter(newVal: any) {
    this.counter.next(newVal);
  }
}
