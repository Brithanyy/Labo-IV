import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalleComponent } from './page-detalle.component';

describe('PageDetalleComponent', () => {
  let component: PageDetalleComponent;
  let fixture: ComponentFixture<PageDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
