import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeeProfilePageComponent } from './vendee-profile-page.component';

describe('VendeeProfilePageComponent', () => {
  let component: VendeeProfilePageComponent;
  let fixture: ComponentFixture<VendeeProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeeProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeeProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
