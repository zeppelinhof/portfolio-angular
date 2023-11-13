import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOptionsComponent } from './contact-options.component';

describe('ContactOptionsComponent', () => {
  let component: ContactOptionsComponent;
  let fixture: ComponentFixture<ContactOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactOptionsComponent]
    });
    fixture = TestBed.createComponent(ContactOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
