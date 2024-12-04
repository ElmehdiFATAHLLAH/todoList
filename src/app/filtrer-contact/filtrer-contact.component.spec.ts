import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrerContactComponent } from './filtrer-contact.component';

describe('FiltrerContactComponent', () => {
  let component: FiltrerContactComponent;
  let fixture: ComponentFixture<FiltrerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrerContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
