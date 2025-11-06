import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDropdownMenuComponent } from './group-dropdown-menu.component';

describe('GroupDropdownMenuComponent', () => {
  let component: GroupDropdownMenuComponent;
  let fixture: ComponentFixture<GroupDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupDropdownMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
