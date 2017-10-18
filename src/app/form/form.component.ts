import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  // Model Driven 
  form;

  ngOnInit(){
    this.form = new FormGroup(
      {
        firstname : new FormControl("" , Validators.compose(
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[\\D\\b\\-\\/]+')
          ]
        )),
        lastname : new FormControl("" , Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[\\D\\b\\-\\/]+')
        ])),
        language : new FormControl("" , Validators.required)
      });
  }
  

  onSubmit = function(user){
    console.log(user);
  }
}
