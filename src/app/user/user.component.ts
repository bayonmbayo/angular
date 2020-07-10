import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // userInput = 'hello';
  // userInput = new FormControl('hello');
  userForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('')
  });


  constructor(public dateService: DateService) {
  }

  ngOnInit(): void {
  }

  showForm(): void{
    console.log(this.userForm.value.name + ' ' + this.userForm.value.email);
  }

}
