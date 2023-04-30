import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesingpreferComponent } from './tablesingprefer.component';

describe('TablesingpreferComponent', () => {
  let component: TablesingpreferComponent;
  let fixture: ComponentFixture<TablesingpreferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesingpreferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesingpreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
