import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectiveComponent } from './directive/directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    RouterLink, 
    ControlFlowComponent, 
    DataBindingComponent, 
    LifeCycleComponent,
  DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-labs';
}
