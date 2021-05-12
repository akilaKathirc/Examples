import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appJugglingText]'
})
export class JugglingTextDirective {

  constructor(private elRef:ElementRef) { }

}
