import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaPreviewComponent } from './pelicula-preview.component';

describe('PeliculaPreviewComponent', () => {
  let component: PeliculaPreviewComponent;
  let fixture: ComponentFixture<PeliculaPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
