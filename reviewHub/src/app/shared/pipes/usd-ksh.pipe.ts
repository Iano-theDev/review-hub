import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdKsh'
})
export class UsdKshPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
