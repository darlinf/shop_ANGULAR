import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreStoreComponent } from './explore-store.component';

describe('ExploreStoreComponent', () => {
  let component: ExploreStoreComponent;
  let fixture: ComponentFixture<ExploreStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
