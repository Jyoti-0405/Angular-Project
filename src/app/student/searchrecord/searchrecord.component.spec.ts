import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrecordComponent } from './searchrecord.component';

describe('SearchrecordComponent', () => {
  let component: SearchrecordComponent;
  let fixture: ComponentFixture<SearchrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
