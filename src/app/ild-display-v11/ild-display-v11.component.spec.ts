import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILDDisplayComponent2 } from './ild-display-v11.component';

describe('IldDisplayComponent', () => {
  let component: ILDDisplayComponent2;
  let fixture: ComponentFixture<ILDDisplayComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILDDisplayComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILDDisplayComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
