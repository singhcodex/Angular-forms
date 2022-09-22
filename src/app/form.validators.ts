import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ValidateAddress(control: AbstractControl){
  let regEx = new RegExp("^[0-9]{5}$");
  return regEx.test(control.value)? null :{
    ValidateAddress:{
      valid: false
    }
  }
}

export function AddressValidator(): ValidatorFn{
  let regEx = new RegExp("[0-9]{5}$");
  return(control: AbstractControl):{[key: string]: boolean} | null => {
    if(!regEx.test(control.value))
    {

      return {'addressMatches': false}
    }
    return null;
  }
}
