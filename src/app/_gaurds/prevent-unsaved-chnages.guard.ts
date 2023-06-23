import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChnagesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent): boolean  {
      if(component.editForm?.dirty){
        return confirm("Unsaved data will be lost, continue")
      }
    return true;
  }
  
}
