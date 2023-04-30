import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableattriComponent } from './tableattri.component';

describe('TableattriComponent', () => {
  let component: TableattriComponent;
  let fixture: ComponentFixture<TableattriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableattriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableattriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
