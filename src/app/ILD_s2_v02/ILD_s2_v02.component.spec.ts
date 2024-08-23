import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILD_s2_v02Component } from './ILD_s2_v02.component';

describe('IldS2V02Component', () => {
  let component: ILD_s2_v02Component;
  let fixture: ComponentFixture<ILD_s2_v02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILD_s2_v02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILD_s2_v02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
