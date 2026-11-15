import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Custdetail } from './custdetail';

describe('Custdetail', () => {
  let component: Custdetail;
  let fixture: ComponentFixture<Custdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Custdetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Custdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
