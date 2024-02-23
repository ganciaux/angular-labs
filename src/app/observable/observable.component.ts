import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit{

  params:HttpParams | undefined;

  constructor(http:HttpClient ){}
  handleClick(){
    const o1= this.foo().subscribe((data)=>{console.log(data)})
    const o2= this.foo().subscribe((data)=>{console.log(data)})
  }

  foo():Observable<number>{
    return new Observable<number>(data=>{
      data.next(42);
      data.complete()
    })
  }

  ngOnInit(): void {
    this.params = new HttpParams();

    const numbers$ = of(1, 2, 3, 4); // simple observable that emits three values
    numbers$.subscribe({
      next: value => console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }
}
