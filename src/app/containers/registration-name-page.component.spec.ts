import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNamePageComponent } from './registration-name-page.component';

describe('RegistrationNamePageComponent', () => {
  let component: RegistrationNamePageComponent;
  let fixture: ComponentFixture<RegistrationNamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationNamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
