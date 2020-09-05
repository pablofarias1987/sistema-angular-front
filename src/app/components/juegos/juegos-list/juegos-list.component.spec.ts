import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosListComponent } from './juegos-list.component';

describe('JuegosListComponent', () => {
  let component: JuegosListComponent;
  let fixture: ComponentFixture<JuegosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
