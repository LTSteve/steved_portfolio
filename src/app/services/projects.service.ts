import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  httpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getProjects$() {
    return this.httpClient.get<any>('assets/projects.json');
  }

  getProjectsFiltered$(filter: string){
    if(!filter) return this.getProjects$();

    let projects = this.httpClient.get<any>('assets/projects.json');

    return new Observable((subscriber) => {
      projects.subscribe({
        next(projectList) {
          for(var i = projectList.length-1; i >= 0; i --){
            let project = projectList[i];
            if(!project.type.includes(filter)){
              projectList.splice(i,1);
            }
          }
          subscriber.next(projectList);
        },
        error(err){
          subscriber.error(err);
        },
        complete(){
          subscriber.complete();
        }
      });
    });
  }

  getProject$(name: string) {
    return this.httpClient.get(`assets/projects/${name}.md`, { responseType: 'text' });
  }
}
