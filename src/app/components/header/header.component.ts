import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';

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
      if(event instanceof NavigationStart)
      {
        const url = event.url;

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
