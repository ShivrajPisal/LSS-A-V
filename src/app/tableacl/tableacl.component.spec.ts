import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaclComponent } from './tableacl.component';

describe('TableaclComponent', () => {
  let component: TableaclComponent;
  let fixture: ComponentFixture<TableaclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableaclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableaclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
