import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidateAddress } from '../form.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileForm: any;

  constructor() {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]')]),
      address: new FormControl('', ValidateAddress),
      message: new FormControl('')

    })
  }

  ngOnInit(): void {


  }

  isFieldValid(field: string) {
    return !this.profileForm.get(field).valid && this.profileForm.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
