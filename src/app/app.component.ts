import { ViewChild, OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,Component } from '@angular/core';
import {MainDisplayComponent} from '../app/main-display/main-display.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy*/{
  
  title = 'app';
  name:String;
  interval:any;
  hideMain:boolean=false;
  inputData:string='';
  classCondition=true;
  arr1=[1,2,3,4,5,6];
  obj1={
    text:'Hey',
    arr:this.arr1
  }
  texttechListFromAppComponent:any={"Angular":'After the most awaited official release of AngularJS 2.0, the popularity of the framework has reached a new level in today’s time. However, this is still a risky decision to jump to the new version if you are not so sure.Whatever the conclusion you come to, you must admit that AngularJS (maintained by Google) has the capacity to build web applications like no other. With a rapid development pace, easy code integration, readiness for  unit testing AngulatJS can certainly be you choice for next project.',"ReactJS":'One of other top JavaScript Frameworks in today’s time is ReactJS and again maintained by a reputed brand Facebook.  Be it it’s ability to perform good in SEO (surptisingly being part of JS family), Simpler JSX, Virtual DOM or powerful JavaScript library, ReactJS is a developer’s choice to build dynamic & high traffic web applications.However, while comparing with AngularJS, ReactJS falls short in testing simplicity and component structure. Also needless to say, this does not make ReactJS to fall short from AngularJS.',"Meteor.JS":'JavaScript is used as the universal scripting language in browsers on the client-side.  Using it on the back-end as well to save time and build expertise is one of he major ideas behind Meteor.js. Hence, front-end developer can also work on the back-end comfortably with Meteor without switching context between Ruby/Java/Python/PHP/ and whatnot JavaScript. It gives the flexibility to use “one language  everywhere.”Also, Meteor is perfect for those who wants to build real time web apps. All of the app’s layers from database to template update automatically. ',"NodeJS":'The main idea of Node.js is to use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time apps that run across distributed devices.  In simple words Node.JS is used for specific reasons to fill out particular needs.It helps build scalable and fast network applications, as it’s capable of handling a large number of simultaneous connections with high throughput, which brings out high scalability. If you want an entire JavaScript environment fully featured with all the tools, Node.js development can be ideal for you.',"EmberJS":'Some amazing frameworks like Ember.js allows you to develop web applications easily with a faster pace. Ember.js is many developers’ first preference because of many reasons. One is Ember.js’s router allows you to stop breaking the web. With Ember, you get URLs and a default working back button with every route  created by you, and the API is easy to use.Moreover, the combination of Ember.js and Rails provides you more freedom, flexibility and joy to code richer and more interactive web app.',"MithrilJS":'Mithril.js has few similar features like React.js. Mithril gives you hierarchical MVC components and safe-by-default templates with an intelligent DOM difference checking for high-performance rendering just like React. Moreover, Customizable data binding, and URL routing are two of the impressive features of Mithril.js.',"PolymarJS":'Polymar is another JavaScript framework from Google. There is no doubt that the joy for developers in Polymar is much lesser than React.js still, there are many improvements made recently.  The material design components that come with Polymer have a very high quality.Moreover, Polymer has web components that are part of the HTML standard which promises longer existence than ReactJS. Hence, there is a low chance for Polymer to get replaced in future by another framework.',"Vue.js":'After using Vue.js for a while, we decided to add it on this top JavaScript frameworks list in today’s time as well. There are few reasons for that. We saw, in many cases Vue.js is replacing Angular. It is a lightweight library with two way data binding and virtual DOM that doesn’t confuse you with tons of things and helps you with just what you need to develop a web app.',"Auriela":'The new kid in the block of Top JavaScript frameworks in today’s time is Aurelia. This framework uses ES2016 where you can code better with object-oriented techniques. If you are using Angular 2 and not satisfied then you can switch to Aurelia with lesser codes.  If you are new to this framework you can watch this video'};
  
  @ViewChild(MainDisplayComponent) maindisplay:MainDisplayComponent;
  
  //data to pass to child sidebar
  techListFromAppComponent:string[]=["Angular","ReactJS","Meteor.JS","NodeJS","EmberJS","MithrilJS","PolymarJS","Vue.js","Auriela"];
  constructor(){
    this.title="Welcome to our first angular app";
    //let obj2=Object.assign({},this.obj1);
    let obj2=JSON.parse(JSON.stringify(this.obj1));
    console.log("obj1",this.obj1);
    console.log("obj2",obj2);
    obj2.text='hey sup';
    console.log("obj1",this.obj1);
    console.log("obj2",obj2);
    obj2.arr.pop();
    console.log("obj1",this.obj1);
    console.log("obj2",obj2);
    let a,b;
    [a,...b]=[1,2,3,4,5,6];
    console.log(a);
    console.log(b);

    //this.interpolationDemo();
  }

  listenToEvent($event){
    this.maindisplay.setData({displayText:this.texttechListFromAppComponent[$event],
    title:$event});
    console.log($event);
  }

  interpolationDemo(){
    var i=0;
    this.interval=setInterval(()=>{
    this.title="Welcome to our first angular app "+i;
    i++;
    },2000);
  }

  onButtonClick(){
    this.hideMain=!this.hideMain;
  }

  setData(event:Event){
    console.log(event);
    document.getElementById('mainText').style.display='none';
  }

  resetData(){
    document.getElementById('mainText').style.display='block';
    document.getElementById('mainText').innerHTML=this.injectTextIntoMainPage();    
  }

  twoWayBinding(){
    document.getElementById('mainText').style.display='block';
    document.getElementById('mainText').innerHTML=this.inputData;
  }

  disableSideBar(){
    return false;
  }

  hideSideBar(){
    return this.hideMain;
  }

  injectTextIntoMainPage(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }

  /* ngOnChanges(){
    console.log("ngOnChanges"+this.name);
  }
  ngOnInit(){
    console.log("ngOnInit");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit"); 
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked"); 
  }
  ngOnDestroy(){
    console.log("ngOnDestroy"); 
  }*/

}
