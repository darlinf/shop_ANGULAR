import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNull'
})
export class IsNullPipe implements PipeTransform {

  transform(value: string): string {
    if(value == null)
      return "Not available";
    return value;
  }

}
