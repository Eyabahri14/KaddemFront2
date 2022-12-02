import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireTableComponent } from './partenaire-table.component';

describe('PartenaireTableComponent', () => {
  let component: PartenaireTableComponent;
  let fixture: ComponentFixture<PartenaireTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenaireTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenaireTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
