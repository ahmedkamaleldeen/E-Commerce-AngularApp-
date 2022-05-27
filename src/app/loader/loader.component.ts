import { LoaderService } from './../services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
loader:any;
  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.getLoader().subscribe(val=>this.loader=val);
  }

}
