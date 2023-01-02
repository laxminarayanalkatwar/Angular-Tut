import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
    console.log("DomSanitizer =>",sanitizer);
    
  }
  transform(value: string, firstName: string): any {
    // return this.sanitizer.bypassSecurityTrustHtml(
    //   '<div style="color:green"> ' + firstName + ' is the Wick </div>'
    // );
    return  'name is ' + value.substr(0,2) + '....'
  }
}
