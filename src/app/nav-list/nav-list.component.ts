import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
    listOfNames:string[]=new Array();
//    @Input() techlist;
//    @Input('techlist') JavascriptFrameworks;
      @Output() clickedTech=new EventEmitter<string>(); 
JavascriptFrameworks=[];
      @Input()
      set techlist(name:string[]){
      if(name.length==0)
      this.JavascriptFrameworks=["None"];
      else
      this.JavascriptFrameworks=name;
      }
  
constructor() { }

  ngOnInit() {
//    this.listOfNames=["Angular","ReactJS","Meteor.JS","NodeJS","EmberJS","MithrilJS","PolymarJS","Vue.js","Auriela"];
  }
  clicked(name){
    this.clickedTech.emit(name);
  }

}
