import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
})
export class CustomStyleDirective {
  // @HostBinding('style.color') color:string
  @Input('appCustomStyle') appCustomStyle: any;
  // @Input() Active1:any
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = 'red';
  }
  ngOnInit() {
    switch (this.appCustomStyle) {
      case 'Active':
        return (
          (this.el.nativeElement.style.color = 'green'),
          (this.el.nativeElement.style.border = '1px solid black')
        );
      case 'Disabled':
        return (
          (this.el.nativeElement.style.color = 'red'),
          (this.el.nativeElement.style.border = '1px solid black')
        );
      case 'Checked':
        return (
          (this.el.nativeElement.style.color = 'yellow'),
          (this.el.nativeElement.style.border = '1px solid black')
        );
      default:
        return (
          (this.el.nativeElement.style.color = 'blue'),
          (this.el.nativeElement.style.border = '1px solid black')
        );

    }
    // this.el.nativeElement.style.color = this.defaultColor
  }
  // @HostListener('mouseenter')
  // onmouseenter() {
  //   this.el.nativeElement.style.color = 'red';
  // }
  // @HostListener('mouseleave')
  // onmouseleave(){
  //   this.el.nativeElement.style.color = 'yellow';
  // }
}
