import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
