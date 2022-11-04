import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, UrlSegment, ActivationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { ProjectslistComponent } from './projectslist.component';
import { ProjectsService } from '../../services/projects.service';

describe('ProjectslistComponent', () => {
  let component: ProjectslistComponent;
  let fixture: ComponentFixture<ProjectslistComponent>;
  let projectsService: jasmine.SpyObj<ProjectsService>;
  let route: ActivatedRoute;
  let router: Router;

  let activationEndSnapshot = new ActivatedRouteSnapshot();
  let activationEnd: ActivationEnd = new ActivationEnd(activationEndSnapshot);

  class MockRoute {
    public snapshot = activationEndSnapshot;
  }

  class MockRouter {
    public events = of(activationEnd);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectslistComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: ProjectsService, useFactory: () => spyOnClass(ProjectsService) },
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectslistComponent);
    component = fixture.componentInstance;

    projectsService = TestBed.get(ProjectsService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.get(Router);

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
        "type":"Games",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Music",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      }
    ]));

    projectsService.getProjectsFiltered$.and.returnValue(of([
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
        "type":"Games",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      },
      {
        "title":"Roboy: Space Janitor",
        "type":"Music",
        "shortDescription":"Guide Roboy in an orbital scrap collection adventure!",
        "date":"11/11/2021",
        "articlePath":"assets/projects/roboy.md",
        "imagePath":"assets/projectimg/site.png",
        "state":"Released"
      }
    ]));

    activationEndSnapshot.url = [new UrlSegment('home', {})];
    activationEndSnapshot.params = {};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of project descriptions', async () => {
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelectorAll('[data-test="project"]').length).toBe(3);
    });
  });

  it('should show project info', async () => {
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const project = fixture.nativeElement.querySelector('[data-test="project"]');
      expect(project).toBeTruthy();
      if(project){
        expect(project.querySelector('[data-test="title"]').innerText).toEqual('Roboy: Space Janitor');
        expect(project.querySelector('[data-test="description"]').innerText).toEqual('Guide Roboy in an orbital scrap collection adventure!');
      }
    });
  });

  it('should call filtered projects service', () => {
      activationEndSnapshot.url = [new UrlSegment('home', {'filter': 'Dev'})];
      activationEndSnapshot.params = {'filter': 'Dev'};

      component.ngOnInit();

      fixture.detectChanges();

      expect(projectsService.getProjectsFiltered$).toHaveBeenCalled();
  });
});
