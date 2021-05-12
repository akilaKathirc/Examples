import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  @HostBinding('class.hoverClass') private changeDesign: boolean = false;
  @HostBinding('class.rotateHover') private changeRotate: boolean = false;

  // @HostBinding('style')
  // get myStyle(): SafeStyle {
  //   return this.sanitizer.bypassSecurityTrustStyle('transform: scaleX(1.2); display: block;');
  // }

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('mouseover') onHover() {
    this.changeDesign = this.changeRotate = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeDesign = this.changeRotate = false;
  }

}
