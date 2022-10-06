import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { BodyComponent } from './body.component';
import { ProjectsService } from '../../services/projects.service';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let projectsService: jasmine.SpyObj<ProjectsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      providers: [
        { provide: ProjectsService, useFactory: () => spyOnClass(ProjectsService) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    projectsService = TestBed.get(ProjectsService);

    projectsService.getProjects$.and.returnValue(of([
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
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should have a list of project descriptions', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="project"]').length).toBe(3);
  });

});
