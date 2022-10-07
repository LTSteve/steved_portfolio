import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { ProjectslistComponent } from './projectslist.component';
import { ProjectsService } from '../../services/projects.service';

describe('ProjectslistComponent', () => {
  let component: ProjectslistComponent;
  let fixture: ComponentFixture<ProjectslistComponent>;
  let projectsService: jasmine.SpyObj<ProjectsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectslistComponent ],
      providers: [
        { provide: ProjectsService, useFactory: () => spyOnClass(ProjectsService) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectslistComponent);
    component = fixture.componentInstance;
    projectsService = TestBed.get(ProjectsService);

    projectsService.getProjects$.and.returnValue(of([
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Dev",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of project descriptions', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="project"]').length).toBe(3);
  });

  it('should show project info', () => {
    const project = fixture.nativeElement.querySelector('[data-test="project"]');

    expect(project.querySelector('[data-test="title"]').innerText).toEqual('Roboy: Space Janitor');
    expect(project.querySelector('[data-test="description"]').innerText).toEqual('Guide Roboy in an orbital scrap collection adventure!');
  });
});
