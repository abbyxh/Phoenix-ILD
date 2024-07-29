import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILDDisplayComponent } from './ild-display.component';

describe('IldDisplayComponent', () => {
  let component: ILDDisplayComponent;
  let fixture: ComponentFixture<ILDDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILDDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILDDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
