import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponentComponent } from './character-detail-component.component';

describe('CharacterDetailComponentComponent', () => {
  let component: CharacterDetailComponentComponent;
  let fixture: ComponentFixture<CharacterDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
