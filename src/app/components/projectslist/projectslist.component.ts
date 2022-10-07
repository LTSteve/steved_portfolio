import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.css']
})
export class ProjectslistComponent implements OnInit {
  projectDescriptions$!: Observable<any>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    //this.projectDescriptions$ = this.httpClient.get<any>('/assets/projects.json');
    this.projectDescriptions$ = this.projectsService.getProjects$();
  }

}
