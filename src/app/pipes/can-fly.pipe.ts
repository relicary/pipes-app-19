import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {

  transform(canFly: boolean): string {
    return canFly ? 'Can fly' : 'Cannot fly';
  }

}
