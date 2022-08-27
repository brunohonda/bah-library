import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahLibraryComponent } from './bah-library.component';

describe('BahLibraryComponent', () => {
  let component: BahLibraryComponent;
  let fixture: ComponentFixture<BahLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
