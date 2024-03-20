import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporActiviComponent } from './repor-activi.component';

describe('ReporActiviComponent', () => {
  let component: ReporActiviComponent;
  let fixture: ComponentFixture<ReporActiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporActiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporActiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
