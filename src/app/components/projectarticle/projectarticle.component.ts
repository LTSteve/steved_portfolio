import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  articleHTML: SafeHtml = '';

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private sanitizer: DomSanitizer) { }

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
    let innerHTML = marked.parse(md, {"sanitize": false});
    this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(innerHTML);
  }

}
