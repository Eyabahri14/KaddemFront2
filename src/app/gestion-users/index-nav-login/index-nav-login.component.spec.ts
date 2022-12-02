import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNavLoginComponent } from './index-nav-login.component';

describe('IndexNavLoginComponent', () => {
  let component: IndexNavLoginComponent;
  let fixture: ComponentFixture<IndexNavLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexNavLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexNavLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
