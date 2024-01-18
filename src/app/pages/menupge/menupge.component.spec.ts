import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupgeComponent } from './menupge.component';

describe('MenupgeComponent', () => {
  let component: MenupgeComponent;
  let fixture: ComponentFixture<MenupgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
