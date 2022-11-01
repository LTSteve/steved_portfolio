import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationStart, EventType } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of, Observable } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let navStart: NavigationStart = new NavigationStart(0, "/");

  class MockRouter {
    public events = of(navStart);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ {provide: Router, useClass: MockRouter} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

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
    navStart.url = "/;filter=Dev";

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.smol).toBe(false);
  });

  it('should enter smol mode when reading an article', () => {
    navStart.url = "/article";

    component.ngOnInit();

    expect(component.smol).toBe(true);
  });

  it('should highlight based on current filter', () => {
    navStart.url = "/;filter=Dev";

    component.ngOnInit();

    expect(fixture.nativeElement.querySelector('[data-test="filters"]').childNodes[1].className).toBe("highlighted");
  });
});
