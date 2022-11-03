import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivationEnd, ActivatedRouteSnapshot, EventType, ActivatedRoute, UrlSegmentGroup, Params, Data, ResolveData, UrlSegment } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of, Observable } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let route: ActivatedRoute;

  let activationEndSnapshot = new ActivatedRouteSnapshot();
  let activationEnd: ActivationEnd = new ActivationEnd(activationEndSnapshot);
  let params = {'filter':''};

  class MockRouter {
    public events = of(activationEnd);
  }

  class MockActivatedRoute {
    public queryParams = of(params);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: ActivatedRoute, useClass: MockActivatedRoute},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  it('should show filters', () => {
    expect(fixture.nativeElement.querySelector('[data-test="filters"]')).toBeTruthy();
  });

  it('should not enter smol mode when not reading an article', () => {
    activationEndSnapshot.url = [new UrlSegment('home', {'filter': 'Dev'})];
    activationEndSnapshot.params = {'filter': 'Dev'};

    component.ngOnInit();

    expect(component.smol).toBe(false);
  });

  it('should enter smol mode when reading an article', () => {
    activationEndSnapshot.url = [new UrlSegment('article', {})];
    activationEndSnapshot.params = {};

    component.ngOnInit();

    expect(component.smol).toBe(true);
  });

  it('should highlight based on current filter', () => {
    activationEndSnapshot.url = [new UrlSegment('home', {'filter': 'Dev'})];
    activationEndSnapshot.params = {'filter': 'Dev'};

    component.ngOnInit();

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[data-test="filters"]').childNodes[1].className).toBe("highlighted");
  });
});
