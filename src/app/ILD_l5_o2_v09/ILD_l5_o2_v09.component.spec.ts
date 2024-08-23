import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILD_l5_o2_v09Component } from './ILD_l5_o2_v09.component';

describe('IldV09Component', () => {
  let component: ILD_l5_o2_v09Component ;
  let fixture: ComponentFixture<ILD_l5_o2_v09Component >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILD_l5_o2_v09Component ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILD_l5_o2_v09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
