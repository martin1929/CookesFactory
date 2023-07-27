import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadesComponent } from './breades.component';

describe('BreadesComponent', () => {
  let component: BreadesComponent;
  let fixture: ComponentFixture<BreadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
