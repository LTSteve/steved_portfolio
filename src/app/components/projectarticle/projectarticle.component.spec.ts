import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectarticleComponent } from './projectarticle.component';

describe('ProjectarticleComponent', () => {
  let component: ProjectarticleComponent;
  let fixture: ComponentFixture<ProjectarticleComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProjectarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectarticleComponent);
    component = fixture.componentInstance;

    route = TestBed.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pull the name of the article', () => {
    spyOn(route.queryParams, 'subscribe');

    component.ngOnInit();

    expect(route.queryParams.subscribe).toHaveBeenCalled();
  });
});
