import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let projectsService: ProjectsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    projectsService = TestBed.inject(ProjectsService);
  });

  it('should return the list of projects', () => {
    httpClient = TestBed.get(HttpClient);

    const projectsMock = [
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md"
      }
    ];

    spyOn(httpClient, 'get').and.returnValue(of(projectsMock));

    projectsService = TestBed.get(ProjectsService);
    const spy = jasmine.createSpy('spy');
    projectsService.getProjects$().subscribe(spy);

    expect(spy).toHaveBeenCalledWith(projectsMock);

    expect(httpClient.get).toHaveBeenCalledWith('assets/projects.json');
  });
});
