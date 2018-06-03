import { Component,OnInit ,OnDestroy} from '@angular/core';
import {MessageService}  from  './message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'app works!';
  text="message"

  constructor(private messegeservice:MessageService)
  {

    messegeservice.message.subscribe(message=>{

      this.text=message;
    })
  }
 
}
