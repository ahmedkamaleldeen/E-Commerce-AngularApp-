import { CounterService } from './../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
counter:any;
  constructor(private counterService:CounterService) { }

  ngOnInit(): void {
    this.counterService.getCounter().subscribe(counter=>{this.counter=counter})
  }

}
