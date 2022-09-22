import { AbstractControl } from '@angular/forms';

export function ValidateAddress(control: AbstractControl){
  let regEx = new RegExp("[0-9]{5}(,*)");
  return regEx.test(control.value)? null :{
    ValidateAddress:{
      valid: false
    }
  }
}
