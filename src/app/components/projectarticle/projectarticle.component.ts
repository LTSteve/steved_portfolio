import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { marked } from 'marked';

@Component({
  selector: 'app-projectarticle',
  templateUrl: './projectarticle.component.html',
  styleUrls: ['./projectarticle.component.css']
})
export class ProjectarticleComponent implements OnInit {
  articleName = '';
  articleMarkdown = '';
  articleHTML = '';

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleName = params['articleName'];

      this.projectsService.getProject$(this.articleName).subscribe(articleMarkdown => {
        this.articleMarkdown = articleMarkdown;

        this.renderMarkdown(this.articleMarkdown);
      });

    });
  }

  renderMarkdown(md: string) {
    this.articleHTML = marked.parse(md);
    console.log(this.articleHTML);
  }

}
