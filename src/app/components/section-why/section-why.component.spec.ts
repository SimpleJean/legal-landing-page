import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyComponent } from './section-why.component';

describe('SectionWhyComponent', () => {
  let component: SectionWhyComponent;
  let fixture: ComponentFixture<SectionWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
