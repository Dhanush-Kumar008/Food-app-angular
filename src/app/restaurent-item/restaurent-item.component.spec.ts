import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentItemComponent } from './restaurent-item.component';

describe('RestaurentItemComponent', () => {
  let component: RestaurentItemComponent;
  let fixture: ComponentFixture<RestaurentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
