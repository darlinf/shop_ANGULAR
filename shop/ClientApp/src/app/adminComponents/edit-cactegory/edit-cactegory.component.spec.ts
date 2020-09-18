import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCactegoryComponent } from './edit-cactegory.component';

describe('EditCactegoryComponent', () => {
  let component: EditCactegoryComponent;
  let fixture: ComponentFixture<EditCactegoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCactegoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCactegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
