import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometerc'
})
export class KilometercPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): unknown {
    return (value * 1.852).toFixed(2);
  }

}
