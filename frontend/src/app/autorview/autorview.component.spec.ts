import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorviewComponent } from './autorview.component';

describe('AutorviewComponent', () => {
  let component: AutorviewComponent;
  let fixture: ComponentFixture<AutorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
