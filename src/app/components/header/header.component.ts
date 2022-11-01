import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, EventType } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  smol = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if('type' in event && event.type == EventType.NavigationStart)
      {
        let url = event.url;

        if(url.includes(';')){
          url = url.split(';')[0];
        }

        if(url == "/"){
          this.smol = false;
        }
        else{
          this.smol = true;
        }
      }
    });
  }

}
