import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisProveComponent } from './regis-prove.component';

describe('RegisProveComponent', () => {
  let component: RegisProveComponent;
  let fixture: ComponentFixture<RegisProveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisProveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisProveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
