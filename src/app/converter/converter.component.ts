import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  form;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      binary : new FormControl(""),
      decimal : new FormControl(""),
      hexa : new FormControl(""),
      octal : new FormControl("")
    });
  }

  decimalChanged = function(oldValue , newValue){
    if(newValue != ""){
      this.form.patchValue({binary : parseInt(newValue , 10).toString(2)});
      this.form.patchValue({octal : parseInt(newValue , 10).toString(8)});
      this.form.patchValue({hexa : parseInt(newValue , 10).toString(16)});
    } else{
      this.form.patchValue({binary : ""});
      this.form.patchValue({octal : ""});
      this.form.patchValue({hexa : ""});
    }
  }
  b = 0;
  o = 0;
  h = 0;

  binaryChanged = function(oldValue , newValue){
    this.b = this.b + 1;
    if(this.b == 1){
      if(newValue != ""){
        this.form.patchValue({decimal : parseInt(newValue , 2).toString(10)});
      }else{
        this.form.patchValue({decimal : ""});
      }
    this.b = 0;
    } 
  }

  octalChanged = function(oldValue , newValue){
    this.o = this.o + 1;
    if(this.o == 1){
      if(newValue != ""){
        this.form.patchValue({decimal : parseInt(newValue , 8).toString(10)})
      }else{
        this.form.patchValue({decimal : ""})
      }
      this.o = 0;
    }
  }

  hexaChanged = function(oldValue ,newValue){
    this.h = this.h + 1;
    if(this.h == 1){
      if(newValue != ""){
        this.form.patchValue({decimal : parseInt(newValue , 16).toString(10)})
      }else{
        this.form.patchValue({decimal : ""})
      }
      this.h = 0;
    }
  }
}
