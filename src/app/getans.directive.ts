import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appGetans]'
})
export class GetansDirective {

  constructor() {
  }

  @HostListener('click', ['$event'])
  onInput(event) {
    console.log(event);
  }

}
