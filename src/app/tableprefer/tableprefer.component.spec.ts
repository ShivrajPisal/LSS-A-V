import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepreferComponent } from './tableprefer.component';

describe('TablepreferComponent', () => {
  let component: TablepreferComponent;
  let fixture: ComponentFixture<TablepreferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepreferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablepreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
