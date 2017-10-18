import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  datas = [
          {
            "id" : 1,
            "name" : "Mustafa",
            "surname" : "ALP"
          },
          {
            "id" : 2,
            "name" : "John",
            "surname" : "Doe"
          }
        ];
  people;      
  
  constructor(private http : Http) { }

  fetchData = function(){
    return this.http.get('src/data/students.json').map(
      (response) => response.json()  
    )
    .subscribe(
      (data) => console.log(data)      
    );
  }

}
