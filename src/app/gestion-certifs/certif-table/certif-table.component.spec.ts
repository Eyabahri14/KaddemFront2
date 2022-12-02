import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifTableComponent } from './certif-table.component';

describe('CertifTableComponent', () => {
  let component: CertifTableComponent;
  let fixture: ComponentFixture<CertifTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
