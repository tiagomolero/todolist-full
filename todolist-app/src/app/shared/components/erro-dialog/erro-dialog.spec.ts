import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroDialog } from './erro-dialog';

describe('ErroDialog', () => {
  let component: ErroDialog;
  let fixture: ComponentFixture<ErroDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
