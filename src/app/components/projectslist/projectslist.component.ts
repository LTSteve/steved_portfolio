import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Router, EventType } from '@angular/router';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.css']
})
export class ProjectslistComponent implements OnInit {
  projectDescriptions$!: Observable<any>;
  noProjects = false;

  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const self = this;

    this.router.events.subscribe(event => {
      if('type' in event && event.type == EventType.ActivationEnd)
      {
        if(!event.snapshot.url || !event.snapshot.url[0] || event.snapshot.url[0].path == ''){
          this.projectDescriptions$ = this.projectsService.getProjects$();
        }
        else{
          this.projectDescriptions$ = this.projectsService.getProjectsFiltered$(event.snapshot.params['filter']);
        }
      }

      if(this.projectDescriptions$ == null){
        this.noProjects = true;
      }

      this.projectDescriptions$.subscribe({
        next(projectList) {
          self.noProjects = projectList.length == 0;
        },
        error(err){
          self.noProjects = true;
        },
        complete(){}
      });
    });

    if(!this.route.snapshot.url || !this.route.snapshot.url[0] || this.route.snapshot.url[0].path == ''){
      this.projectDescriptions$ = this.projectsService.getProjects$();
    }
    else{
      this.projectDescriptions$ = this.projectsService.getProjectsFiltered$(this.route.snapshot.params['filter']);
    }

    if(this.projectDescriptions$ == null){
      this.noProjects = true;
    }

    this.projectDescriptions$.subscribe({
      next(projectList) {
        self.noProjects = projectList.length == 0;
      },
      error(err){
        self.noProjects = true;
      },
      complete(){}
    });
  }

}
