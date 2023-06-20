import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'strong[yellowMarker]',
})
export class YellowMarkerDirective {
  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = this.hoverHighlightColor;
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.backgroundColor = 'yellow';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @Input() defaultColor: string = 'yellow';
  @Input() hoverHighlightColor: string = '#fe1';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'padding',
      '2px 5px'
    );
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
