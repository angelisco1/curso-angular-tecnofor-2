import { Directive } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  constructor() {
    // console.log('Blink directive')
  }

}