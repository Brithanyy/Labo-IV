import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModificarComponent } from './page-modificar.component';

describe('PageModificarComponent', () => {
  let component: PageModificarComponent;
  let fixture: ComponentFixture<PageModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageModificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
