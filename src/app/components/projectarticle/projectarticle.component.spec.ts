import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of, Observable } from 'rxjs';

import { ProjectarticleComponent } from './projectarticle.component';
import { ProjectsService } from '../../services/projects.service';

describe('ProjectarticleComponent', () => {
  let component: ProjectarticleComponent;
  let fixture: ComponentFixture<ProjectarticleComponent>;
  let route: ActivatedRoute;
  let projectsService: jasmine.SpyObj<ProjectsService>;

  let mockProjectName = 'name';
  let mockMarkdown = 'md';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ProjectarticleComponent ],
      providers: [
        { provide: ProjectsService, useFactory: () => spyOnClass(ProjectsService) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectarticleComponent);
    component = fixture.componentInstance;

    projectsService = TestBed.get(ProjectsService);
    route = TestBed.inject(ActivatedRoute);

    route.params = of({'articleName':mockProjectName});
    projectsService.getProject$.and.returnValue(of(mockMarkdown));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pull the name of the article', () => {
    component.ngOnInit();

    expect(component.articleName).toBe(mockProjectName);
  });

  it('should pull the named article\'s markdown', () => {
    component.ngOnInit();

    expect(component.articleMarkdown).toBe(mockMarkdown);
  });

  it('should render the article\'s markdown', () => {
    component.renderMarkdown(mockMarkdown);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('article').innerHTML).toContain(`<p>${mockMarkdown}</p>`)
  });
});
