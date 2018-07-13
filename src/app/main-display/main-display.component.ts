import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  obj:any={displayText:'None',
  title:'None'};
  constructor() { }

  ngOnInit() {
  }

  setData(text:any){
    this.obj=text;
  }

}
