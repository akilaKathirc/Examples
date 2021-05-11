import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomElementsComponent } from './custom-elements/custom-elements.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [CustomElementsComponent],
  imports: [
    CommonModule
  ], exports: [CustomElementsComponent],
  entryComponents: [CustomElementsComponent]
})
export class CustomelmentsModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(CustomElementsComponent, { injector: this.injector });
    customElements.define('pop-up', myElement);
  }
}
