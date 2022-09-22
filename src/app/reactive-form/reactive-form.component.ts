import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {ValidateAddress } from '../form.validators';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileForm: any;

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern('[0-9]{12}')]),
      address: new FormControl('', ValidateAddress),
      message: new FormControl('')

    })

  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
