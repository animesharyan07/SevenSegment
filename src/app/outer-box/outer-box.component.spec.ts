import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterBoxComponent } from './outer-box.component';

describe('OuterBoxComponent', () => {
  let component: OuterBoxComponent;
  let fixture: ComponentFixture<OuterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
