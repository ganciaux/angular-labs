import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTextColorSize]',
  standalone: true,
})
export class TextColorDirective {
  @Input()
  @HostBinding('style.color')
  color = 'blue';

  @Input()
  @HostBinding('style.font-size.px')
  size = 36;
}
