import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, EventType, DefaultUrlSerializer, UrlTree, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  smol = false;
  currentFilter = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if('type' in event && event.type == EventType.ActivationEnd
        && event.snapshot.url[0])
      {
        if(event.snapshot.url[0].path == 'home' || event.snapshot.url[0].path == ''){
          this.smol = false;
          this.currentFilter = event.snapshot.params['filter'] || '';
        }
        else{
          this.smol = true;
        }
      }
    });
  }
}
