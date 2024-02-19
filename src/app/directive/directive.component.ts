import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextColorDirective } from './text-color-size-directive.component';
import { HostDirectiveComponent } from '../host-directive/host-directive.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, TextColorDirective, HostDirectiveComponent],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  @Input() isError = true;
  @Input() color = 'red';

  toggleClass() {
    this.isError = !this.isError;
  }
}
