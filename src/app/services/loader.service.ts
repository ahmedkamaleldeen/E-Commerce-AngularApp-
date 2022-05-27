import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
loader=new BehaviorSubject(true);
  constructor() { }
  getLoader(){
    return this.loader;
  }
  setLoader(newVal:boolean){
    this.loader.next(newVal);
  }
  // hide(){}
}
