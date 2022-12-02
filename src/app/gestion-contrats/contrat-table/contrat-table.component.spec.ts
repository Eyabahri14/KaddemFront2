import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratTableComponent } from './contrat-table.component';

describe('ContratTableComponent', () => {
  let component: ContratTableComponent;
  let fixture: ComponentFixture<ContratTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
