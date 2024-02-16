import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isLogged: boolean=false;
  tasks:number[]=[1,2,3,4];

  update(){
    this.isLogged = !this.isLogged
  }
  
}
