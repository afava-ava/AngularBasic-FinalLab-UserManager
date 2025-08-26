import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightEven]'
})
export class HighlightEven implements OnInit{
  @Input('appHighlightEven') userId!: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.userId % 2 === 0) {
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.backgroundColor = '#f0f9ff';
    }
  }
}
