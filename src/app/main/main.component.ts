import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = 'Bayon';
  elements = [1, 2 , 3, 4];
  color = true;

  constructor() { }

  ngOnInit(): void {
  }

  userClick(): void{
    console.log('Clicked');
  }

}
