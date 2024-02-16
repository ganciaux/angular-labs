import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string='';
  isDisable: boolean=true;
  text: string='';
    
  handleClick($event: MouseEvent) {
    console.log("handleClick:", $event)
    this.isDisable=!this.isDisable
  }
}
