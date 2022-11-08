import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]) {
    return (value-273).toFixed(0);
  }

}
