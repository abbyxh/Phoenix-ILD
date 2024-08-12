import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IldS2V02Component } from './ild-s2-v02.component';

describe('IldS2V02Component', () => {
  let component: IldS2V02Component;
  let fixture: ComponentFixture<IldS2V02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IldS2V02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IldS2V02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
