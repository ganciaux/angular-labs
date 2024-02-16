import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleDataComponent } from './life-cycle-data.component';

describe('LifeCycleDataComponent', () => {
  let component: LifeCycleDataComponent;
  let fixture: ComponentFixture<LifeCycleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCycleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
