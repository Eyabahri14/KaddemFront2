import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifErrorsComponent } from './certif-errors.component';

describe('CertifErrorsComponent', () => {
  let component: CertifErrorsComponent;
  let fixture: ComponentFixture<CertifErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
