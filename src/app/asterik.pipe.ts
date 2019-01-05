import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterik'
})
export class AsterikPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    console.log(typeof (value));
    var asterik:string = value.replace(/./g,"*");
    return asterik;
  }

}
