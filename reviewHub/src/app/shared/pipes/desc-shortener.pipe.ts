import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descShortener'
})
export class DescShortenerPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value;
  }

}
