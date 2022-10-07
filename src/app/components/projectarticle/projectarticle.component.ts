import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-projectarticle',
  templateUrl: './projectarticle.component.html',
  styleUrls: ['./projectarticle.component.css']
})
export class ProjectarticleComponent implements OnInit {
  articleName = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.articleName = params['articleName'];
    });
  }

}
