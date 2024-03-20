import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEmpesaComponent } from './ventas-empesa.component';

describe('VentasEmpesaComponent', () => {
  let component: VentasEmpesaComponent;
  let fixture: ComponentFixture<VentasEmpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasEmpesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasEmpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
