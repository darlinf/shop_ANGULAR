import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charFirstUppercase'
})
export class CharFirstUppercasePipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(value[0],value[0].toUpperCase());
    return value;
  }

}
