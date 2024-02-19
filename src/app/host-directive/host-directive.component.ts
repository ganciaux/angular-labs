import { Component } from '@angular/core';
import { TextColorDirective } from '../directive/text-color-size-directive.component';

@Component({
  selector: 'app-host-directive',
  standalone: true,
  imports: [],
  hostDirectives: [
    {
      directive: TextColorDirective,
      inputs: ['size', 'color'],
    },
  ],
  templateUrl: './host-directive.component.html',
  styleUrl: './host-directive.component.css',
})
export class HostDirectiveComponent {}
