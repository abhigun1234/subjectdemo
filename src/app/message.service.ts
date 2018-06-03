import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class MessageService {
  public  message =new Subject<string>();
  constructor() { }

  setMessage(value:string)
  {

    this.message.next(value);
  }

}
