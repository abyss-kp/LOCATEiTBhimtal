import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args)
    {
      return value;
    }
    else
    {
     args=args.toUpperCase() 
    }
   return value.filter(items=>{
      return items.title.startsWith(args)==true
    })
  }

}
