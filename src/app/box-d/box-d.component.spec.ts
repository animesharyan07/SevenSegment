import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDComponent } from './box-d.component';

describe('BoxDComponent', () => {
  let component: BoxDComponent;
  let fixture: ComponentFixture<BoxDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
