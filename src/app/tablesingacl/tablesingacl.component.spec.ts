import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesingaclComponent } from './tablesingacl.component';

describe('TablesingaclComponent', () => {
  let component: TablesingaclComponent;
  let fixture: ComponentFixture<TablesingaclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesingaclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesingaclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
