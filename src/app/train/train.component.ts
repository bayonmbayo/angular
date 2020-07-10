import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainData;
  urlData = 'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.urlData)
          .subscribe(
            value => this.trainData = value
          );
    timer(1000, 2000)
    .pipe(
      map(num => num + 1)
    )
    .subscribe(
      (num) => console.log(num)
    );
  }

}
