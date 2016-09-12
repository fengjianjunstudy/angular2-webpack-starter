/**
 * Created by fengjj on 2016/9/12.
 */
import { Pipe ,PipeTransform  } from '@angular/core';
@Pipe({name:'permissions'})
export class PermissionsPipe implements PipeTransform {
  transform(v: number, ...args: any[]):string {
    let val:string;
    switch (v){
      case 0:
        val= '管理员';
        break;
      case 1:
        val= '非管理员';
        break;
      default:
        val= '不知道';
    }
    return val;
  }
}
