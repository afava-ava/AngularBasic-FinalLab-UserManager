import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if(!value){
      return '';
    }

    const splitFullname = value.split(' ');

    const capitalizesplitFullName = splitFullname.map(chunk => 
      {
        if (chunk.length > 0) {
        return chunk.charAt(0).toUpperCase() + chunk.slice(1);
        }
        return '';
      });

    return capitalizesplitFullName.join(' ');
  }

}
