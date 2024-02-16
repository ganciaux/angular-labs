import { AfterViewInit, Component, ElementRef, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LifeCycleDataComponent } from '../life-cycle-data/life-cycle-data.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [LifeCycleDataComponent, FormsModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, OnDestroy {
    
  @ViewChild("myMessage")
  myMmessageElement!: ElementRef;

  firstname: string | undefined;
  lastname: string | undefined;

  ngOnInit(): void {
    console.log('Parent ngOnInit...')
  }

  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit', this.myMmessageElement)
    this.myMmessageElement.nativeElement.innerText ="Bonjour depuis ngAfterViewInit!";
  }

  ngOnDestroy(): void {
    console.log('Parent ngOnDestroy', this.myMmessageElement)
  }

  message(){
    this.myMmessageElement.nativeElement.innerText = 'Set from parent...';
  }
}
