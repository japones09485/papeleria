import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuracionesComponent } from './curaciones.component';

describe('CuracionesComponent', () => {
  let component: CuracionesComponent;
  let fixture: ComponentFixture<CuracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
