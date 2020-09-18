import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReduce'
})
export class StringReducePipe implements PipeTransform {

  transform(value: string, noCaracter: number = 18): string {
    if(value.length > 8)
      return value.slice(0, noCaracter)+"...";
    return value;
  }

}
