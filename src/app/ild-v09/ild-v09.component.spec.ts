import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IldV09Component } from './ild-v09.component';

describe('IldV09Component', () => {
  let component: IldV09Component;
  let fixture: ComponentFixture<IldV09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IldV09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IldV09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
