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

  getProject$(name: string) {
    return this.httpClient.get(`assets/projects/${name}.md`, { responseType: 'text' });
  }
}
