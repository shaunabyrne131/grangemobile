import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Modules', url: '/courses', icon: 'apps' }, 
    { title: 'Timetables', url: '/timetables', icon: 'calendar' },
    { title: 'Students', url: '/messageboard',  icon: 'chatbubbles' } 
  ];
  public labels = [];
  constructor() {}
}
