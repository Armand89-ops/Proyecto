import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisProducComponent } from './regis-produc.component';

describe('RegisProducComponent', () => {
  let component: RegisProducComponent;
  let fixture: ComponentFixture<RegisProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisProducComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
