import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IldDisplayComponent } from './ild-display.component';

describe('IldDisplayComponent', () => {
  let component: IldDisplayComponent;
  let fixture: ComponentFixture<IldDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IldDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
