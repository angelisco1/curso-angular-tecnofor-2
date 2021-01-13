import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit {
  @HostBinding('style.backgroundColor') colorFondo: string;
  // @HostBinding('class.loQueSea') loQueSea: boolean = false;
  // @HostBinding('attr.disabled') disabled: boolean = false;

  @Input('appBlink') color: string;
  defaultColor: string = 'white';

  intervalId: NodeJS.Timeout;

  constructor() {
    // console.log('Blink directive')
  }

  ngOnInit() {
    this.color = this.color || 'yellowgreen';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.intervalId = setInterval(() => {
      this.colorFondo = this.colorFondo == this.color ? this.defaultColor : this.color;
    }, 500);
  }

  @HostListener('mouseout')
  onMouseOut() {
    clearInterval(this.intervalId);
    this.colorFondo = this.defaultColor;
  }
}
