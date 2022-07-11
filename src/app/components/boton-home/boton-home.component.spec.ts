import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonHomeComponent } from './boton-home.component';

describe('BotonHomeComponent', () => {
  let component: BotonHomeComponent;
  let fixture: ComponentFixture<BotonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
