import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgSlideComponent } from './main-img-slide.component';

describe('MainImgSlideComponent', () => {
  let component: MainImgSlideComponent;
  let fixture: ComponentFixture<MainImgSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
