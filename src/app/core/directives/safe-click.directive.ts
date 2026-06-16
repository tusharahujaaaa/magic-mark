import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSafeClick]',
  standalone: true
})
export class SafeClickDirective {
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    console.log('Safe click directive activated.');
  }
}
