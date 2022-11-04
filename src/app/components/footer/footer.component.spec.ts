import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name', () => {
    expect(fixture.nativeElement.querySelector('[data-test="myname"]')).toBeTruthy();
  });

  it('should show email', () => {
    expect(fixture.nativeElement.querySelector('[data-test="myemail"]')).toBeTruthy();
  });

  it('should copy email on click', () => {

  });

  it('should show portfolio link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="myresume"]')).toBeTruthy();
  });

  it('should show github link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="mygithub"]')).toBeTruthy();
  });

  it('should show linkedin link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="mylinkedin"]')).toBeTruthy();
  });

  it('should show youtube link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="myyoutube"]')).toBeTruthy();
  });

  it('should show soundcloud link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="mysoundcloud"]')).toBeTruthy();
  });
});
