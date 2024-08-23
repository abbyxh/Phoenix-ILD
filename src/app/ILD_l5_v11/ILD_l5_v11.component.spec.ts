import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILD_l5_v11Component } from './ILD_l5_v11.component';

describe('IldDisplayComponent', () => {
  let component: ILD_l5_v11Component;
  let fixture: ComponentFixture<ILD_l5_v11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILD_l5_v11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILD_l5_v11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
