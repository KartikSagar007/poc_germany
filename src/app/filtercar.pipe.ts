import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercar'
})
export class FiltercarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      /* value.filter((item)=>{
        if(item.version.toLowerCase().indexOf(args.toLowerCase()) > -1){
          return
        }
      }) */
      return value.filter(
        (item) => {
          if(item.version.toLowerCase().indexOf(args.toLowerCase()) > -1){
            return true
          }
          else{
            return false
          }
         }
      );
      /* return value.filter(
        item => item.version.toLowerCase().indexOf(args.toLowerCase()) > -1
      ); */

    }
  }

}
