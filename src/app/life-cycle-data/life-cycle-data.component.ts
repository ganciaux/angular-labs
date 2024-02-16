import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-data',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-data.component.html',
  styleUrl: './life-cycle-data.component.css'
})
export class LifeCycleDataComponent implements OnChanges {
  @Input({ required: true }) firstname: string | undefined;
  @Input({ required: true }) lastname: string | undefined;

  fullname: string='';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['firstname'] || changes['lastname']) {
      console.log('Child ngOnChanges...')
      this.fullname = `${this.firstname} ${this.lastname}`;
    }
  }
}
