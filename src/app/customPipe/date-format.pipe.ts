import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  constructor() {}
  transform(value: string): number {
    if(!value){
      return 0;
    }
    let currentYear = Number(new Date().getFullYear());
    let userBrithYear = Number(value.split("-")[0]);
    let userAge = currentYear - userBrithYear;
    return userAge;
  }
}
