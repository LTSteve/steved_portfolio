import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  httpClient;

  projectsCache: Observable<any> = new Observable<any>();
  projectsCached = false;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getProjects$() {
    return this._getCachedProjects();
  }

  getProjectsFiltered$(filter: string){
    if(!filter) return this.getProjects$();

    let projects = this._getCachedProjects();

    return new Observable((subscriber) => {
      projects.subscribe({
        next(projectList: any) {
          for(var i = projectList.length-1; i >= 0; i --){
            let project = projectList[i];
            if(!project.type.includes(filter)){
              projectList.splice(i,1);
            }
          }
          subscriber.next(projectList);
        },
        error(err: any){
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

  private _getCachedProjects() {
    if(this.projectsCached){
      return this.projectsCache;
    }
    else{
      this.projectsCache = this.httpClient.get<any>('assets/projects.json');
      this.projectsCached = true;
      return this.projectsCache;
    }
  }
}
