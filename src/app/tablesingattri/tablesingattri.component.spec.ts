import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesingattriComponent } from './tablesingattri.component';

describe('TablesingattriComponent', () => {
  let component: TablesingattriComponent;
  let fixture: ComponentFixture<TablesingattriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesingattriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesingattriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
