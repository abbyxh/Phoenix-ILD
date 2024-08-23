import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILD_l5_o1_v02Component } from './ILD_l5_o1_v02.component';

describe('IldDisplayComponent', () => {
  let component: ILD_l5_o1_v02Component;
  let fixture: ComponentFixture<ILD_l5_o1_v02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILD_l5_o1_v02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILD_l5_o1_v02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
