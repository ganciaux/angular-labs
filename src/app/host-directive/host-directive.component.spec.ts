import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDirectiveComponent } from './host-directive.component';

describe('HostDirectiveComponent', () => {
  let component: HostDirectiveComponent;
  let fixture: ComponentFixture<HostDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
